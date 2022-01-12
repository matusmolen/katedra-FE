import React from 'react'
import {Box, Breadcrumbs, Container, Grid, Typography,} from '@mui/material';
import Image from 'next/image';
import AppLink from "../../../utils/AppLink";
import PostGrid from "../../../components/posts/ImageGrid";

export const getStaticProps = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/vystavas');
    const data = await res.json();

    return {
        props: {vystavy: data},
    };
};

export default function galeriaVystav({vystavy}) {
    const najnovsie = vystavy.slice(0, 4);

    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Typography>Galéria výstav</Typography>
            </Breadcrumbs>

            <Grid container>
                <Grid item md={8}>
                    <h1>Výstavná činnosť na katedre</h1>
                    <h5>
                        Kopa dizajnu na jednom mieste! Ak si náhodou nestihol navštíviť niektorú z výstav nezúfaj.
                        Ponúkame ti prehľad exhibícii, ktoré organizovala katedra dizajnu. Nájdeš tu pestrý mix
                        grafických ale aj produktových prác.
                    </h5>
                </Grid>
                <Grid item md={4} sx={{position: 'relative'}}>
                    <Image src='/images/galeria.png' alt="galeria" layout='fill' objectFit='contain'/>
                </Grid>
            </Grid>

            <PostGrid route='/galeria/vystavy' items={najnovsie}/>

            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                gap: '1em',
                marginBottom: '2em'
            }}>
                <AppLink href='/galeria/vystavy/starsie' style={{color: '#000000'}}>
                    Zobraziť staršie
                </AppLink>
            </Box>
        </Container>
    )
}
