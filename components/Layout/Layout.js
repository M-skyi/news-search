import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children, headerProps }) => (
  <div>
    <Header headerProps={headerProps} />
    {children}
    <Footer />
  </div>
);
export default Layout;
