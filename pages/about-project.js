import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const AboutProject = () => {
  const { t } = useTranslation('aboutProject');
  return (
    <div>
      <h1 className="container"> {t('title')} </h1>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'aboutProject',
      ])),
    },
  };
}

export default AboutProject;
