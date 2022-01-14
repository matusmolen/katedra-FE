import {Container, Grid,} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import AppLink from "../../utils/AppLink";
import {CategoryButton} from "./[id]";
import Image from "next/image"

export default function GalleryYears({years}) {
    return (
        <Box sx={{minHeight:'90vh', display: 'flex', alignItems:'center'}}>
            <Container>
                <h1 style={{margin: 0}}>GALÉRIA PRÁC</h1>
                <Grid container spacing={2} mt={1}>
                    {years.map((year, index) => (
                        <Grid item key={index}>
                            <AppLink href={`/galeria/${year.id}`} key={index} underline='none'>
                                <CategoryButton key={index} size='large' variant='contained'>
                                    {year.year}
                                </CategoryButton>
                            </AppLink>
                        </Grid>
                    ))}
                </Grid>
                <h5>Pozrite si výber z prác našich študentov.</h5>
            </Container>
            <Box sx={{position:'fixed', inset: '0', zIndex: -1}}>
                <Image src='/images/gallery_bg.png' layout='fill' objectFit='cover'/>
            </Box>
        </Box>
    );
}

export async function getStaticProps() {
    const categoriesRes = await fetch('https://katedra-dizajnu.herokuapp.com/years?_sort=year');

    return {
        props: {
            years: await categoriesRes.json(),
        },
    };
}
