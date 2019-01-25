import fetch from 'isomorphic-fetch';

const getSinglePost = async () => {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3&content_type=guide&fields.slug=${
      props.query.slug
    }`
  );
  const json = await res.json();

  return { data: json.items[0].fields };
};

const getAllPosts = async () => {
  const res = await fetch(
    'https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3'
  );
  const json = await res.json();
  return { data: json.items };
};

export { getSinglePost, getAllPosts };
