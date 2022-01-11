import {Breadcrumbs, Button, Container, Grid, Typography,} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import AppLink from "../../utils/AppLink";
import axios from "axios";

const CategoryButton = styled(Button)(({theme}) => ({
    borderRadius: 20,
    backgroundColor: '#000000',
    color: '#ffffff',
    '&.selected': {
        backgroundColor: theme.palette.primary.main,
        color: '#000000',
    }
}));

export async function getStaticProps() {
    const categoriesRes = await fetch('https://katedra-dizajnu.herokuapp.com/Gallery-categories');
    const categoriesData = await categoriesRes.json();

    return {
        props: {
            categories: categoriesData,
        },
    };
}

export default function ResponsiveSpacing({categories}) {
    return (
        <Box>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" separator=">">
                    <AppLink underline="hover" color="inherit" href="../galeria/">
                        Galéria
                    </AppLink>
                    <Typography>2020/2021</Typography>
                </Breadcrumbs>

                <Grid
                    container
                    sx={{margin: '2em 0'}}
                    spacing={2}
                >
                    {categories.map((item, index) => (
                        <Grid item>
                            <CategoryButton
                                size="large"
                                variant="contained"
                            >
                                {item.title}
                            </CategoryButton>
                        </Grid>
                     ))}
                </Grid>
            </Container>
            <Container maxWidth='xl'>
                <Masonry
                    breakpointCols={{default: 4, 800: 2}}
                    spacing={4}
                >
                    {categories[0].gallery.images.map((item, index) => (
                        <Stack key={index}>
                            <img
                                src={item.url}
                                srcSet={item.url}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    borderBottomLeftRadius: 4,
                                    borderBottomRightRadius: 4,
                                    maxWidth: `${Math.floor(Math.random() * 100) + 80}%`,
                                    objectFit: 'contain',
                                    display: 'block',
                                    float: 'right'
                                }}
                            />
                        </Stack>
                    ))}
                </Masonry>
            </Container>
        </Box>
    );
}
