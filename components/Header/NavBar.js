import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import { useState } from 'react';
import styles from '../../styles/Header.module.css';
import { useTranslation } from 'next-i18next';

const NavBar = () => {
  const { t } = useTranslation('common');
  const { locale, locales } = useRouter();
  const [active, setActive] = useState({
    activeObject: locale,
    objects: locales,
  });
  const pathName = useRouter().asPath;
  const stylesLogo = pathName === '/' ? styles.logoChanges : styles.logo;
  const stylesHover = pathName === '/analytics' ? styles.analyticHover : null;
  const stylesLinkChanges = pathName === '/about-project' ? styles.activeLinkAboutPr : null;
  const stylesActiveChanges = pathName === '/about-project' ? styles.activeAbout : null;

  const navigation = [
    { id: 1, title: t('header.btn.home'), path: '/' },
    { id: 2, title: t('header.btn.aboutProject'), path: '/about-project' },
  ];

  function toggleActive(index) {
    setActive({ ...active, activeObject: active.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (active.objects[index] === active.activeObject) {
      return styles.activeLocal;
    }
    return styles.inactiveLocal;
  }
  return (
    <div className={classNames(styles.nav, 'container')}>
      <div className={styles.leftPart}>
        <Link href="/">
          <a className={stylesLogo}>NewsAnalyzer</a>
        </Link>
      </div>
      <div className={styles.rightPart}>
        <nav className={styles.links}>
          <div className={styles.localLinkWrapper}>
            {active.objects.map((el, index) => (
              <Link key={el} href={pathName} locale={el} className={styles.localitem} >
                <a className={`${styles.localLink} ${toggleActiveStyles(index)}`} onClick = {() => { toggleActive(index); }} >
                  {el}
                </a>
              </Link>
            ))}
          </div>
          {navigation.map(({ id, title, path }) => (
            <Link href={path} key={id}>
              <a
                className={`${styles.link} ${stylesHover}
                         ${pathName === path ? styles.active : null}
                         ${pathName === path ? styles.activeLinkHome : null}
                         ${pathName === path ? stylesLinkChanges : null}
                         ${pathName === path ? stylesActiveChanges : null}
                         `}
              >
                {title}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
export default NavBar;
