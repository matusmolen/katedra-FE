import {Box, Breadcrumbs, Container, Typography} from '@mui/material';
import React from 'react';
import AppLink from "../../../utils/AppLink";
import PostGrid from "../../../components/posts/ImageGrid";

export const getStaticProps = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/vystavas');
    const data = await res.json();

    return {
        props: {vystavy: data}
    }
}

export default function starsieVystavy({vystavy}) {
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <AppLink underline="hover" color="inherit" href="/galeria/vystavy">
                    Galéria výstav
                </AppLink>
                <Typography>Staršie výstavy</Typography>
            </Breadcrumbs>

            <h2>Staršie výstavy</h2>

            <PostGrid route='/galeria/vystavy' items={vystavy}/>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: '1em',
                marginBottom: '2em'
            }}>
                <AppLink href="/galeria/vystavy" style={{color: '#000000'}}>
                    späť
                </AppLink>
            </Box>
        </Container>
    )
}