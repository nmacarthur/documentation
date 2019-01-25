import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const headerStyle = {
  height: '60px',
  backgroundColor: '#FF0000'
};

const Header = () => (
  <div style={headerStyle}>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
);

export default Header;
