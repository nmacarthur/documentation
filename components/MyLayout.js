import Header from './Header';
import Sidebar from './Sidebar';

const layoutStyle = {
  margin: 0,
  padding: 0,
  display: 'flex',
  height: '100%',
  width: '100%'
};

const Layout = ({ sidebar, children }) => (
  <div>
    <Header />
    <div className="layout">
      <Sidebar data={sidebar} />
      <div>{children}</div>
      <style jsx global>
        {`
          html {
            height: 100%;
          }
          body {
            margin: 0;
            min-height: 100%;
            width: 100%;
          }
          #__next {
            height: 100%;
          }
        `}
      </style>
      <style jsx>
        {`
          .layout {
            margin: 0;
            padding: 0;
            display: flex;
            height: 100%;
            width: 100%;
          }
        `}
      </style>
    </div>
  </div>
);

export default Layout;
