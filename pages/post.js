import { withRouter } from 'next/router';
import fetch from 'isomorphic-fetch';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

import { getSinglePost, getAllPosts } from '../dataFetching';

import Layout from '../components/MyLayout';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const Content = withRouter(({ router, content, title }) => {
  const preparedContent = htmlToReactParser.parse(documentToHtmlString(content));
  return (
    <div>
      <h1>{title}</h1>
      {preparedContent}
    </div>
  );
});

const Page = ({ data }) => {
  console.log(data);
  return <Layout sidebar={data} />;
};
Page.getInitialProps = async props => {
  const sidebar = await getAllPosts();

  return { data: sidebar };
};

export default Page;
