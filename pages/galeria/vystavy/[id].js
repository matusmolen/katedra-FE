import React from 'react';
import {Box, Breadcrumbs, Container, Grid, Typography, useMediaQuery,} from '@mui/material';
import ImageSlider from '../../../components/ImageSlider';
import AppLink from "../../../utils/AppLink";
import theme from "../../../styles/theme";
import {ImageBox} from "../../aktuality/[id]";
import Image from "next/image";
import {AWSLoader} from "../../../utils/ImageLoader";

function Detail({vystava}) {
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <AppLink underline="hover" color="inherit" href="/galeria/vystavy">
                    Galéria výstav
                </AppLink>
                <Typography>{vystava.title}</Typography>
            </Breadcrumbs>

            <Grid container mt={4} spacing={4}  justifyContent='space-between'
                  flexDirection={{xs: 'column-reverse', sm:'column-reverse', md: 'row'}}>
                <Grid item sm={12} md={5} position='relative'>
                    <ImageBox sx={{left:'-145px'}}>
                        <Image
                            loader={AWSLoader}
                            src={vystava.pic1.url}
                            alt={vystava.pic1.alternativeText}
                            height={vystava.pic1.height}
                            width={vystava.pic1.width}
                            objectFit='cover'
                            blurDataURL={vystava.pic1.formats.small.url}
                            placeholder='blur'
                        />
                    </ImageBox>
                    <ImageBox sx={{display: largeScreen ? 'none' : 'block'}}>
                        <Image
                            loader={AWSLoader}
                            src={vystava.pic2.url}
                            alt={vystava.pic2.alternativeText}
                            height={vystava.pic2.height}
                            width={vystava.pic2.width}
                            objectFit='cover'
                            blurDataURL={vystava.pic2.formats.small.url}
                            placeholder='blur'
                        />
                    </ImageBox>
                    <ImageBox sx={{top:'55%', right:'-35%'}}>
                        <Image
                            loader={AWSLoader}
                            src={vystava.pic3.url}
                            alt={vystava.pic3.alternativeText}
                            height={vystava.pic3.height}
                            width={vystava.pic3.width}
                            objectFit='cover'
                            blurDataURL={vystava.pic3.formats.small.url}
                            placeholder='blur'
                        />
                    </ImageBox>

                </Grid>
                <Grid item sm={12} md={7}>
                    <Box position='relative' padding={2}>
                        <h1 style={{
                            marginTop: 0,
                            marginLeft: largeScreen ? '-1.5em' : 0,
                            fontWeight: largeScreen ? 400 : 700,
                            fontSize: largeScreen ? '80px' : '3em',
                            lineHeight: largeScreen ? 'auto' : '1.2em'
                        }}>
                            {vystava.title}
                        </h1>
                        <h4>{vystava.description}</h4>
                        <p style={{whiteSpace: 'pre-wrap', paddingLeft: largeScreen ? '1em' : 0}}>
                            {vystava.content}
                        </p>
                        <Box
                            sx={{
                                position: 'absolute',
                                inset: largeScreen ? '4em -35px 0 0' : '4em 0 0 0',
                                backgroundColor: largeScreen ? '#FFFFFF' : theme.palette.primary.main,
                                borderRight: `35px solid ${theme.palette.primary.main}`,
                                borderTop: `35px solid ${theme.palette.primary.main}`,
                                zIndex: -1,
                                opacity: 0.8
                            }}
                        />
                        <ImageBox sx={{right:'-50%',top:'5em', display: largeScreen ? 'block' : 'none'}}>
                            <Image
                                loader={AWSLoader}
                                src={vystava.pic2.url}
                                alt={vystava.pic2.alternativeText}
                                height={vystava.pic2.height}
                                width={vystava.pic2.width}
                                objectFit='cover'
                                blurDataURL={vystava.pic2.formats.small.url}
                                placeholder='blur'
                            />
                        </ImageBox>
                    </Box>
                </Grid>
            </Grid>
            <h5>
                Fotky z výstavy <ImageSlider galery={vystava.foto}/>
            </h5>
        </Container>
    );
}

export async function getStaticPaths() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/vystavas');
    const data = await res.json();

    const paths = data.map((vystava) => {
        return {
            params: {id: vystava.id.toString()},
        };
    });

    return {
        paths,
        fallback: "blocking",
    };
}

export async function getStaticProps({params}) {
    const id = params.id;
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/vystavas/' + id);
    const data = await res.json();

    return {
        props: {vystava: data},
        revalidate: 60
    };
}

export default Detail
