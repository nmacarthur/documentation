import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { getSinglePost, getAllPosts } from '../dataFetching';

import Layout from '../components/MyLayout';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const Content = ({ content, title }) => {
  const preparedContent = htmlToReactParser.parse(documentToHtmlString(content));
  return (
    <div>
      <h1>{title}</h1>
      {preparedContent}
    </div>
  );
};

const Page = ({ sidebar, data }) => (
  <Layout sidebar={sidebar}>
    <Content title={data.title} content={data.content} />
  </Layout>
);

Page.getInitialProps = async props => {
  const sidebar = await getAllPosts();
  const data = await getSinglePost(props);

  return { sidebar: sidebar.data, data: data.data };
};

export default Page;
