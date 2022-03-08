import {Box, Breadcrumbs, Container, Grid, Typography, useMediaQuery} from '@mui/material';
import * as React from 'react';
import AppLink from "../../utils/AppLink";
import theme from "../../styles/theme";
import {ImageBox} from "../aktuality/[id]";
import Image from "next/image";

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
        fallback: "blocking"
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/coops/' + id);
    const data = await res.json();

    return {
        props: {spolupraca: data},
        revalidate: 60
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
                        <Image
                            src={spolupraca.pic1.url}
                            alt={spolupraca.pic1.alternativeText}
                            height={spolupraca.pic1.height}
                            width={spolupraca.pic1.width}
                            objectFit='cover'
                            blurDataURL={spolupraca.pic1.formats.small.url}
                            placeholder='blur'
                        />
                    </ImageBox>
                    <ImageBox sx={{display: largeScreen ? 'none' : 'block'}}>
                        <Image
                            src={spolupraca.pic2.url}
                            alt={spolupraca.pic2.alternativeText}
                            height={spolupraca.pic2.height}
                            width={spolupraca.pic2.width}
                            objectFit={'cover'}
                            blurDataURL={spolupraca.pic2.formats.small.url}
                            placeholder='blur'
                        />
                    </ImageBox>
                    <ImageBox sx={{top:'50%', right:'-25%', width: '100% !important'}}>
                        <Image
                            src={spolupraca.pic3.url}
                            alt={spolupraca.pic3.alternativeText}
                            height={spolupraca.pic3.height}
                            width={spolupraca.pic3.width}
                            objectFit={'cover'}
                            blurDataURL={spolupraca.pic3.formats.small.url}
                            placeholder='blur'
                        />
                    </ImageBox>
                </Grid>
                <Grid item md={7}>
                    <Box sx={{position:'relative'}} padding={2}>
                        <h1 style={{
                            marginTop: 0,
                            marginLeft: largeScreen ? '-1.5em' : 0,
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
                        <ImageBox sx={{right:'-50%',top:'5em', display: largeScreen ? 'block' : 'none'}}>
                            <Image
                                src={spolupraca.pic2.url}
                                alt={spolupraca.pic2.alternativeText}
                                height={spolupraca.pic2.height}
                                width={spolupraca.pic2.width}
                                objectFit={'cover'}
                                blurDataURL={spolupraca.pic2.formats.small.url}
                                placeholder='blur'
                            />
                        </ImageBox>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

