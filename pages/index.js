import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import Layout from '../components/MyLayout';

import { getAllPosts } from '../util/dataFetching';

const nanoid = require('nanoid');

const PostLink = ({ id, slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?id=${id}&title=${title}&slug=${slug}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index = ({ data }) => (
  <Layout sidebar={data}>
    <h1>Index Content</h1>
  </Layout>
);

Index.getInitialProps = async () => {
  const data = await getAllPosts();

  return data;
};

export default Index;
