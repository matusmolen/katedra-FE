import Layout from '../components/Layout';
import '../styles/globals.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../styles/theme.js';
import {CacheProvider} from '@emotion/react';
import createCache from "@emotion/cache";

function MyApp({Component, pageProps}) {
    return (
        <CacheProvider value={pageProps.emotionCache || createCache({key: 'css'})}>
            <Head>
                <title>Katedra dizajnu</title>
                <meta name="description" content="webstranka pre katedru dizajnu"/>
                <link rel="icon" href="/favicon-TUKE.ico"/>
                {/* <link rel="stylesheet" href="../styles/fonts.css" /> */}
            </Head>

            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
