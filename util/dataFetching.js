import fetch from 'isomorphic-fetch';

const contentful = require('contentful');

const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'g0l9uemxdyxt',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '07646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3'
});

const getSinglePost = async props => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3&content_type=guide&fields.slug=${
      props.query.slug
    }&include=1`
  );
  const json = await res.json();
  const assets = json.includes.Asset;
  return { data: json.items[0].fields, assets };
};

const getAllPosts = async () => {
  const res = await fetch(
    'https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3'
  );
  const json = await res.json();
  return { data: json.items };
};

const getImage = async ({ id }) => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/assets/${id}?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3`
  );
  const json = await res.json();
  return { data: json };
};

export { getSinglePost, getAllPosts, getImage };
