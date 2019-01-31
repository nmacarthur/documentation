import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { BLOCKS } from '@contentful/rich-text-types';
import { getSinglePost, getAllPosts, getAssets } from '../util/dataFetching';

import Layout from '../components/MyLayout';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => `<img src='' alt='oi' />`
  }
};

const Content = ({ content, title, slug }) => {
  const data = documentToHtmlString(content, options);
  const parsed = htmlToReactParser.parse(data);

  return <p>{parsed}</p>;
};

const Page = async ({ sidebar, data, slug }) => (
  <Layout sidebar={sidebar}>
    <Content title={data.title} content={data.content} slug={slug} />
  </Layout>
);

Page.getInitialProps = async props => {
  const sidebar = await getAllPosts();
  const data = await getSinglePost(props);
  return { sidebar: sidebar.data, data: data.data, slug: props.query.slug };
};

export default Page;
