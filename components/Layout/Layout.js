import Footer from '../footer/Footer';
import Header from '../header/Header';

const Layout = ({ children, headerProps }) => (
  <div>
    <Header headerProps={headerProps} />
    {children}
    <Footer />
  </div>
);
export default Layout;
