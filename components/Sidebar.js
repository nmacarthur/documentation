import Link from 'next/link';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

const nanoid = require('nanoid');

const SidebarStyles = styled.aside`
  flex-shrink: 0;
  min-height: calc(100vh - 80px);
  padding-right: 48px;
  box-sizing: content-box;
  border-right: 1px solid rgb(210, 210, 210);
  min-width: 200px;
`;

const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 10px;
  margin: 0;
  font-size: 20px;
`;
const SubMenuItem = styled.li`
  margin-bottom: 23px;
  a {
    padding-left: 0;
    background-color: transparent;
    color: inherit;
    text-decoration: none;
  }
  a.active {
    font-weight: 700;
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
