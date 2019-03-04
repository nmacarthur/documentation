import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import styled from 'styled-components';
import parse from 'html-react-parser';
import nanoid from 'nanoid';
import { getSinglePost, getAllPosts, getAssets } from '../util/dataFetching';
import Layout from '../components/MyLayout';
import Title from '../components/atoms/Title';
import Text from '../components/atoms/Text';
import Box from '../components/atoms/Box';

const StyledText = styled(Text)`
  img {
    width: 100%;
  }
`;

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node =>
      `<img class="img" src="${node.data.target.sys.id}" id="" alt='oi' />`
  }
};

const swapUrlForID = async (string, slug) => {
  const newString = string;
  const assetArray = getAssets(slug)
    .then(assets =>
      assets.map(a => {
        const obj = {};
        obj.id = a.sys.id;
        obj.url = a.fields.file.url;
        return obj;
      })
    )
    .then(a => a.map(object => newString.replace(object.id, object.url)));
  return assetArray;
};

const Content = ({ content, title, slug }) => {
  const parsed = parse(content, {
    replace: domNode => {
      if (domNode.name === 'p') {
        if (domNode.children) {
          return (
            <Box>
              {domNode.children.map(child => (
                <Text key={nanoid()}>{child.data}</Text>
              ))}
            </Box>
          );
        }
        return domNode;
      }
      return domNode;
    }
  });
  return (
    <div>
      <Title>{title}</Title>
      <StyledText>{parsed}</StyledText>
    </div>
  );
};

const Page = ({ sidebar, data, title, slug }) => (
  <Layout sidebar={sidebar}>
    <Content title={title} content={data} slug={slug} />
  </Layout>
);

Page.getInitialProps = async props => {
  const sidebar = await getAllPosts();
  const data = await getSinglePost(props);

  const htmlString = documentToHtmlString(data.data.content, options);

  if (data.assets) {
    const newdata = await swapUrlForID(htmlString, props.query.slug);
    return { sidebar: sidebar.data, data: newdata, title: data.data.title, slug: props.query.slug };
  }
  return {
    sidebar: sidebar.data,
    data: htmlString,
    title: data.data.title,
    slug: props.query.slug
  };
};

export default Page;
