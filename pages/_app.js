import '../styles/globals.css';
import { useState, useCallback } from 'react';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(false);
  const [noFound, setNoFound] = useState(false);
  const [result, setResult] = useState(false);

  const loader = useCallback((param) => {
    setPreloader(param);
  }, []);
  const noNewsFound = useCallback((param) => {
    setNoFound(param);
  }, []);
  const searchResult = useCallback((param) => {
    setResult(param);
  }, []);

  const headerProps = [loader, noNewsFound, searchResult];

  return <Layout headerProps={headerProps} >
    <Component
      {...pageProps}
      loader={preloader}
      noFound={noFound}
      result={result}
    />
  </Layout>;
}

export default appWithTranslation(MyApp);
