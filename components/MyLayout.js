import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Header from './organisms/Header';
import Sidebar from './Sidebar';

const LayoutInner = styled.div`
  display: flex;
  padding: 40px 0 40px 40px;
`;

const Content = styled.main`
  flex: 1;
  margin: 30px 0 0;
  padding: 0 80px;
  max-width: 100%;
  overflow: hidden;
`;
const BaseStyles = styled.div`
  font-family: ${themeGet('fonts.bodyText')};
  color: ${themeGet('colors.black')};
  line-height: ${themeGet('lineHeights.l')};
`;

const Layout = ({ sidebar, children }) => (
  <BaseStyles>
    <Header />
    <LayoutInner>
      <Sidebar data={sidebar} />
      <Content>{children}</Content>
    </LayoutInner>
  </BaseStyles>
);

export default Layout;
