import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import Layout from '../components/MyLayout';

const contentful = require('contentful');
// import loadDB from '../lib/load-db';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {data.map((article, index) => (
          <p key={`${index}21`}>{article.title}</p>
        ))}
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  /* const client = contentful.createClient({
    space: 'g0l9uemxdyxt',
    environment: 'master', // defaults to 'master' if not set
    accessToken: '7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3'
  });
  client
    .getEntries()
    .then(response => console.log(response.items))
    .catch(console.error);

  return { data: client.response };
  */
  const res = await fetch(
    'https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3'
  );
  const json = await res.json();
  return { data: json.items };
};

export default Index;
