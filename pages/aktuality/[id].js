import {Box, Breadcrumbs, Container, Grid, Typography, useMediaQuery} from '@mui/material';
import React from 'react';
import AppLink from "../../utils/AppLink";
import theme from "../../styles/theme";
import {styled} from "@mui/material/styles";
import Image from "next/image"

export const ImageBox = styled('div')(({theme}) => ({
    '& img, & div': {
        width: '100%',
    },
    [theme.breakpoints.up('md')]: {
        position: 'absolute',
        width: '120%',
        zIndex: -2,
    },
    [theme.breakpoints.down('md')]: {
        position: 'relative',
        width: '100%',
        zIndex: 1,
        inset: 'auto'
    },
}));


export const getStaticPaths = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/news');
    const data = await res.json();

    const paths = data.map((aktualita) => {
        return {
            params: {id: aktualita.id.toString()}
        };
    });

    return {
        paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/news/' + id);

    const data = await res.json();

    return {
        props: {aktualita: data},
        revalidate: 60
    };
};

export default function AktDetail({aktualita}) {
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <AppLink underline="hover" color="inherit" href="/aktuality">
                    Aktuality
                </AppLink>
                <Typography>{aktualita.title}</Typography>
            </Breadcrumbs>

            <Grid container mt={4} spacing={4}  justifyContent='space-between'
                  flexDirection={{xs: 'column-reverse', sm:'column-reverse', md: 'row'}}>
                <Grid item md={5} position='relative'>
                    <ImageBox sx={{left:'-145px', top: '-2%'}}>
                        <Image
                            src={aktualita.pic1.url}
                            alt={aktualita.pic1.alternativeText}
                            height={aktualita.pic1.height}
                            width={aktualita.pic1.width}
                            objectFit={'cover'}
                            blurDataURL={aktualita.pic1.formats.small.url}
                            placeholder='blur'
                        />
                    </ImageBox>
                    <ImageBox sx={{display: largeScreen ? 'none' : 'block'}}>
                        <Image
                            src={aktualita.pic2.url}
                            alt={aktualita.pic2.alternativeText}
                            height={aktualita.pic2.height}
                            width={aktualita.pic2.width}
                            objectFit={'cover'}
                            blurDataURL={aktualita.pic2.formats.small.url}
                            placeholder='blur'
                        />
                    </ImageBox>
                    <ImageBox sx={{bottom:'-5%', right:'-35%'}}>
                        <Image
                            src={aktualita.pic3.url}
                            alt={aktualita.pic3.alternativeText}
                            height={aktualita.pic3.height}
                            width={aktualita.pic3.width}
                            objectFit={'cover'}
                            blurDataURL={aktualita.pic3.formats.small.url}
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
                            {aktualita.title}
                        </h1>
                        <h4>{aktualita.description}</h4>
                        <p style={{whiteSpace: 'pre-wrap', paddingLeft: largeScreen ? '1em' : 0}}>
                            {aktualita.content}
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
                                src={aktualita.pic2.url}
                                alt={aktualita.pic2.alternativeText}
                                height={aktualita.pic2.height}
                                width={aktualita.pic2.width}
                                objectFit={'cover'}
                                blurDataURL={aktualita.pic2.formats.small.url}
                                placeholder='blur'
                            />
                        </ImageBox>

                    </Box>
                </Grid>
            </Grid>
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
