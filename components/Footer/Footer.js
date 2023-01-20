import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '../../styles/Footer.module.css';
import gitIcon from '../../public/img/iconGit.png';
import facebookIcon from '../../public/img/iconFacebook.png';
import { useTranslation } from 'next-i18next';

const socialNav = [
  { id: 1, path: 'https://github.com/M-skyi', src: gitIcon },
  {
    id: 2,
    path: 'https://www.facebook.com/profile.php?id=100006967621155',
    src: facebookIcon,
  },
];

const Footer = () => {
  const { t } = useTranslation('common');
  const footerNav = [
    { id: 1, title: t('footer.link.home'), path: '/' },
    { id: 2, title: t('footer.link.aboutProject'), path: '/about-project' },
    { id: 3, title: 'Valencia.JS', path: '/' },
  ];
  const currentYear = new Date().getFullYear();
  return (
    <div className={classNames(styles.footer, 'container')}>
      <div className={styles.copyright}>{`© ${currentYear} Supersite`}</div>
      <nav className={styles.nav}>
        {footerNav.map(({ id, title, path }) => (
          <Link href={path} key={id}>
            <a className={styles.navItem}>{title}</a>
          </Link>
        ))}
      </nav>
      <div className={styles.social}>
        {socialNav.map(({ id, src, path }) => (
          <Link key={id} href={path}>
            <a className={styles.socialItem}>
              <Image src={src} alt='Social Icon'/>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Footer;
