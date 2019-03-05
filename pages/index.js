import Link from 'next/link';
import Layout from '../components/MyLayout';

import { getAllPosts } from '../util/dataFetching';

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
