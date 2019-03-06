import Link from 'next/link';
import IndexLayout from '../components/IndexLayout';
import Button from '../components/atoms/Button';
import Container from '../components/atoms/Container';
import { getAllPosts } from '../util/dataFetching';
import Title from '../components/atoms/Title';
import '../style.scss';

const Index = ({ data }) => (
  <IndexLayout>
    <Container>
      <Title type="h1" size="h1">
        New Word Order Writing Guide
      </Title>
      <Button href="./introduction" skin="outline">
        Go.
      </Button>
    </Container>
  </IndexLayout>
);

Index.getInitialProps = async () => {
  const data = await getAllPosts();

  return data;
};

export default Index;
