import {Box, Breadcrumbs, Container, Grid, Typography,} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import AppLink from "../../utils/AppLink";
import ImageGrid from "../../components/gallery/ImageGrid";


function Aktuality({aktuality}) {
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Typography>AKTUALITY</Typography>
            </Breadcrumbs>
            <Grid container>
                <Grid item sm={12} md={6}>
                    <h1>Čo je nové na katedre</h1>
                    <h5>
                        Nestrať prehľad o tom, čo sa práve deje na katedre. Prinášame ti
                        aktuálne informácie o významných udalostiach, ale aj užitočné
                        správy, ktoré by nemali ujsť tvojej pozornosti.
                    </h5>
                </Grid>
                <Grid item sm={12} md={6} sx={{position:'relative'}}>
                    <Image src='/images/Frame.png' alt="free fonts" layout='fill' objectFit='contain'/>
                </Grid>
            </Grid>

            <ImageGrid route='/aktuality' items={aktuality.slice(0, 3)}/>

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
                <AppLink style={{color: '#000000'}} href="/aktuality/starsie">
                    Zobraziť staršie
                </AppLink>
            </Box>
        </Container>
    );
}

export const getStaticProps = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/news');
    const data = await res.json();

    return {
        props: {aktuality: data},
    };
};

export default Aktuality
