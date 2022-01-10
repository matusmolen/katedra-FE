import {Box, Breadcrumbs, Container, Grid, Typography, useMediaQuery} from '@mui/material';
import * as React from 'react';
import AppLink from "../../utils/AppLink";
import theme from "../../styles/theme";
import {ImageBox} from "../aktuality/[id]";

export const getStaticPaths = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/coops');
    const data = await res.json();

    const paths = data.map(spolupraca => {
        return {
            params: {id: spolupraca.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/coops/' + id);
    const data = await res.json();

    return {
        props: {spolupraca: data}
    }
}

export default function Details({spolupraca}) {
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <AppLink underline="hover" color="inherit" href="/spolupracuj">
                    Spolupracuj
                </AppLink>
                <Typography>{spolupraca.title}</Typography>
            </Breadcrumbs>

            <Grid container mt={4} spacing={4}  justifyContent='space-between'
                  flexDirection={{xs: 'column-reverse', sm:'column-reverse', md: 'row'}}>
                <Grid item md={5} position='relative'>
                    <ImageBox sx={{left:'-145px'}}>
                        <img src={spolupraca.pic1.url} alt={spolupraca.pic1.alternativeText} width="100%"/>
                    </ImageBox>
                    <ImageBox sx={{bottom:'1em', right:'-35%'}}>
                        <img src={spolupraca.pic3.url} alt={spolupraca.pic3.alternativeText} width="100%"/>
                    </ImageBox>
                </Grid>
                <Grid item md={7}>
                    <Box sx={{position:'relative'}} padding={2}>
                        <h1 style={{
                            marginTop: 0,
                            fontWeight: largeScreen ? 400 : 700,
                            fontSize: largeScreen ? '80px' : '3em',
                            lineHeight: largeScreen ? 'auto' : '1.2em'
                        }}>
                            {spolupraca.title}
                        </h1>
                        <h4>{spolupraca.description}</h4>
                        <p style={{whiteSpace: 'pre-wrap', paddingLeft: largeScreen ? '1em' : 0}}>
                            {spolupraca.content}
                        </p>
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: '4em 0 0 0',
                                backgroundColor: theme.palette.primary.main,
                                zIndex: -1,
                                opacity: 0.8
                            }}
                        />
                        <ImageBox sx={{right:'-50%',top:'5em'}}>
                            <img src={spolupraca.pic2.url} alt={spolupraca.pic2.alternativeText} width="100%"/>
                        </ImageBox>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

