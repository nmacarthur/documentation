import Link from 'next/link';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const nanoid = require('nanoid');

const SidebarStyles = styled.aside`
  flex-shrink: 0;
  min-height: calc(100vh - 80px);
  padding-right: 48px;
  box-sizing: content-box;
`;

const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  font-size: 20px;
`;
const SubMenuItem = styled.li`
  margin-bottom: 10px;
  a {
    padding-left: 0;

    font-size: ${themeGet('fontSizes.s')}px;
  }
`;

const PostLink = ({ id, slug, title }) => (
  <SubMenuItem>
    <Link as={`/${slug}`} href={`/post?id=${id}&title=${title}&slug=${slug}`}>
      <a>{title}</a>
    </Link>
  </SubMenuItem>
);

const Sidebar = ({ data }) => (
  <SidebarStyles>
    <SubMenu>
      {data.map(article => (
        <PostLink
          key={nanoid()}
          id={article.sys.id}
          slug={article.fields.slug}
          title={article.fields.title}
        />
      ))}
    </SubMenu>
  </SidebarStyles>
);

export default Sidebar;
