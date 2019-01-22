import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Layout from '../components/MyLayout';

const nanoid = require('nanoid');

const PostLink = ({ id, title }) => (
  <li>
    <Link as={`/p/${id}`} href={`/post?id=${id}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index = ({ data }) => (
  <Layout>
    <h1>Posts</h1>
    <div>
      {data.map(article => (
        <div key={`${nanoid()}`}>
          <p>{article.fields.title}</p>
          <p>{article.fields.slug}</p>
          {documentToHtmlString(article.fields.content)}
        </div>
      ))}
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch(
    'https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3'
  );
  const json = await res.json();
  console.log(json.items);
  return { data: json.items };
};

export default Index;
