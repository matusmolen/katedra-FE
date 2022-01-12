import {Box, Breadcrumbs, Container, Typography} from '@mui/material';
import React from 'react';
import AppLink from "../../utils/AppLink";
import PostGrid from "../../components/posts/PostGrid";

export const getStaticProps = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/news');
    const data = await res.json();

    return {
        props: {aktuality: data},
    };
};

export default function starsieAktuality({aktuality}) {
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <AppLink underline="hover" color="inherit" href="/aktuality">
                    Aktuality
                </AppLink>
                <Typography>Staršie aktuality</Typography>
            </Breadcrumbs>

            <h2>Staršie aktuality</h2>

            <PostGrid route='/aktuality' items={aktuality}/>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: '1em',
                marginBottom: '2em'
            }}>
                <AppLink
                    target="_blank"
                    href="https://fu.tuke.sk/wps/portal/fu/fakulta/aktuality"
                    style={{color: '#000000'}}
                >
                    Zobraziť fakultné aktuality
                </AppLink>
                <AppLink style={{color: '#000000'}} href='/aktuality'>
                    späť
                </AppLink>
            </Box>
        </Container>
    );
}
