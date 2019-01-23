const fetch = require('isomorphic-fetch');

const guides = async () => {
  const res = await fetch(
    'https://cdn.contentful.com/spaces/g0l9uemxdyxt/environments/master/entries?access_token=7646a8b0e6279a63315a1a9bc526427183a8924429036970202be98294e1caf3'
  );
  const json = await res.json();

  const slugs = json.items.map(item => {
    const url = `/${item.fields.slug}`;
    const slug = `${item.fields.slug}`;
    const info = {
      url,
      data: {
        page: '/post',
        query: {
          slug
        }
      }
    };
    return info;
  });
  const data = {
    '/': { page: '/' }
  };

  slugs.forEach(slug => (data[`${slug.url}`] = slug.data));
  return data;
};

module.exports = {
  exportPathMap() {
    return guides();
  }
};
