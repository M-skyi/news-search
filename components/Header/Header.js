import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../../styles/Header.module.css';
import NavBar from './NavBar';
import Search from './Search';

const Header = ({ headerProps }) => {

  const pathName = useRouter().asPath;
  const search = pathName !== '/' ? false : true
  
  return (
    <div className={pathName === '/' ? styles.headerWrapper : styles.headerAnalytic}>
      <NavBar />
      <hr className={styles.line} />
      {search && <Search headerProps={headerProps} />}
    </div>
  );
};
export default Header;
