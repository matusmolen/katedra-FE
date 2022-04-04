import Layout from '../components/Layout';
import '../styles/globals.css';
import Head from 'next/head';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../styles/theme.js';
import {CacheProvider} from '@emotion/react';
import createCache from "@emotion/cache";
import {SnackbarProvider} from 'notistack';
import BackToTop from "../components/BackToTop";

function MyApp({Component, pageProps}) {
    return (
        <CacheProvider value={pageProps.emotionCache || createCache({key: 'css'})}>
            <Head>
                <title>Katedra dizajnu</title>
                <meta name="description" content="webstranka pre katedru dizajnu"/>
                <link rel="icon" href={"/favicon-TUKE.ico"}/>
            </Head>

            <ThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                    <BackToTop/>
                </SnackbarProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
