import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { BLOCKS } from '@contentful/rich-text-types';
import { getSinglePost, getAllPosts, getAssets } from '../util/dataFetching';

import Layout from '../components/MyLayout';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => `<img src="${node.data.target.sys.id}" id="" alt='oi' />`
  }
};

const swapUrlForID = async (string, slug) => {
  const newString = string;
  const assetArray = getAssets(slug)
    .then(assets =>
      assets.map(a => {
        const obj = {};
        obj.id = a.sys.id;
        obj.url = a.fields.file.url;
        return obj;
      })
    )
    .then(a =>
      a.map(object => {
        const string = newString.replace(object.id, object.url);
        return string;
      })
    );
  return assetArray;
};

const Content = ({ content, title, slug }) => {
  const parsed = htmlToReactParser.parse(content);
  return (
    <div>
      <h1>{title}</h1>
      <p>{parsed}</p>
    </div>
  );
};

const Page = ({ sidebar, data, title, slug }) => (
  <Layout sidebar={sidebar}>
    <Content title={title} content={data} slug={slug} />
  </Layout>
);

Page.getInitialProps = async props => {
  const sidebar = await getAllPosts();
  const data = await getSinglePost(props);

  const htmlString = documentToHtmlString(data.data.content, options);

  if (data.assets) {
    const newdata = await swapUrlForID(htmlString, props.query.slug);
    return { sidebar: sidebar.data, data: newdata, title: data.title, slug: props.query.slug };
  }
  return {
    sidebar: sidebar.data,
    data: htmlString,
    title: data.title,
    slug: props.query.slug
  };
};

export default Page;
