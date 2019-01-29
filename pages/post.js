import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { BLOCKS } from '@contentful/rich-text-types';
import { getSinglePost, getAllPosts } from '../util/dataFetching';

import Layout from '../components/MyLayout';

import { RichTextParser } from '../util/richtextParser';

import { getImage } from '../util/dataFetching';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const data = getImage({ id: node.data.target.sys.id });
      return `<img src='' alt='oi' />`;
    }
  }
};

const Content = ({ content, title }) => {
  const data = documentToHtmlString(content, options);
  const parsed = htmlToReactParser.parse(data);
  return <p>{parsed}</p>;
};

const Page = ({ sidebar, data }) => (
  <Layout sidebar={sidebar}>
    <Content title={data.title} content={data.content} />
  </Layout>
);

Page.getInitialProps = async props => {
  const sidebar = await getAllPosts();
  const data = await getSinglePost(props);

  return { sidebar: sidebar.data, data: data.data, assets: data.assets };
};

export default Page;
