import Link from 'next/link';

const nanoid = require('nanoid');

const PostLink = ({ id, slug, title }) => (
  <li style={linkStyle}>
    <Link as={`/${slug}`} href={`/post?id=${id}&title=${title}&slug=${slug}`}>
      <a style={aStyle}>{title}</a>
    </Link>
  </li>
);

const linkStyle = {
  fontSize: '1.25rem',
  listStyleType: 'none',
  lineHeight: '2.5rem'
};

const aStyle = {
  textDecoration: 'none'
};

const sidebarStyle = {
  width: '20%',
  height: '100%',
  backgroundColor: '#efefef',
  padding: '2rem'
};

const Sidebar = ({ data }) => (
  <div style={sidebarStyle}>
    {data.map(article => (
      <PostLink
        key={nanoid()}
        id={article.sys.id}
        slug={article.fields.slug}
        title={article.fields.title}
      />
    ))}
  </div>
);

export default Sidebar;
