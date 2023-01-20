import Analytic from '../components/Analytics/Analytic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AnalyticsPage = () => {
  return (
    <div>
      <Analytic />
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'aboutProject',
        'analytic',
      ])),
    },
  };
}

export default AnalyticsPage;
