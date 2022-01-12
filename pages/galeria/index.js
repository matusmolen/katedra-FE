import {Container, Grid,} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import AppLink from "../../utils/AppLink";
import {CategoryButton} from "./[id]";
import Image from "next/image"

export default function GalleryYears({years}) {
    return (
        <Container sx={{position:'relative', height: '100%'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent:'center',
                    height: '100%',
                    minHeight: '70vh',
                    padding: 1
            }}
            >
                <h1>GALÉRIA PRÁC</h1>
                <Grid container spacing={2}>
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
            </Box>
            <Box sx={{position:'absolute', inset: '0 -2em', zIndex: -1}}>
                <Image src='/images/gallery_bg.png' layout='fill' objectFit='cover'/>
            </Box>
        </Container>
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
