import { withRouter } from 'next/router';
import fetch from 'isomorphic-fetch';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Router from 'next/router';

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

const Page = props => (
  <Layout>
    <Content title={props.data.title} content={props.data.content} />
  </Layout>
);

Page.getInitialProps = async props => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3&content_type=guide&fields.slug=${
      props.query.slug
    }`
  );
  const json = await res.json();

  return { data: json.items[0].fields };
};

export default Page;
