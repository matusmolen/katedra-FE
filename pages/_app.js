import Layout from '../components/Layout';
import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from 'next/head';
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../styles/theme.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Katedra dizajnu</title>
        <meta name="description" content="webstranka pre katedru dizajnu" />
        <link rel="icon" href="/favicon-TUKE.ico" />
        {/* <link rel="stylesheet" href="../styles/fonts.css" /> */}
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
