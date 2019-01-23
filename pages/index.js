import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import Layout from '../components/MyLayout';

const nanoid = require('nanoid');

const PostLink = ({ id, slug, title }) => (
  <li>
    <Link as={`/guide/${slug}`} href={`/post?id=${id}&title=${title}&slug=${slug}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Index = ({ data }) => (
  <Layout>
    <h1>Posts</h1>
    <div>
      {data.map(article => (
        <PostLink
          key={nanoid()}
          id={article.sys.id}
          slug={article.fields.slug}
          title={article.fields.title}
        />
      ))}
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch(
    'https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3'
  );
  const json = await res.json();
  return { data: json.items };
};

export default Index;
