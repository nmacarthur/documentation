import Link from 'next/link';
import IndexLayout from '../components/IndexLayout';
import Button from '../components/atoms/Button';
import Container from '../components/atoms/Container';
import Title from '../components/atoms/Title';
import '../style.scss';

const Index = () => (
  <IndexLayout>
    <Container>
      <Title type="h1" size="h1">
        New Word Order Writing Guide
      </Title>
      <Link href="post/[slug]" as="post/introduction" skin="outline">
        Go.
      </Link>
    </Container>
  </IndexLayout>
);

export default Index;
