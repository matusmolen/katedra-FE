import {Breadcrumbs, Button, Container, Grid, Typography,} from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import AppLink from "../../utils/AppLink";

const CategoryButton = styled(Button)(({theme}) => ({
    borderRadius: 20,
    backgroundColor: '#000000',
    color: '#ffffff',
    '&.selected': {
        backgroundColor: theme.palette.primary.main,
        color: '#000000',
    }
}));

export default function ResponsiveSpacing() {



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
                    <Grid item>
                        <CategoryButton
                            size="large"
                            variant="contained"
                        >
                            Industrial
                        </CategoryButton>
                    </Grid>
                    <Grid item>
                        <CategoryButton
                            size="large"
                            variant="contained"
                        >
                            Priestor
                        </CategoryButton>
                    </Grid>
                    <Grid item>
                        <CategoryButton
                            size="large"
                            variant="contained"
                            className="selected"
                        >
                            Inovácia
                        </CategoryButton>
                    </Grid>
                    <Grid item>
                        <CategoryButton
                            size="large"
                            variant="contained"
                        >
                            Viz. komunikácia
                        </CategoryButton>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='xl'>
                <Masonry columns={4} spacing={1}>
                    {itemData.map((item, index) => (
                        <Stack key={index}>
                            <img
                                src={`${item.img}?w=162&auto=format`}
                                srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}
                            />
                        </Stack>
                    ))}
                </Masonry>
            </Container>

            {/* <Masonry columns={4} spacing={{ xs: 1, sm: 2, md: 6 }}>
                {itemData.map((item, index) => (
                    <Stack key={index} >
                        {
                            index == 1
                                ? <Container>
                                    <h2>
                                        VIZUÁLNA
                                        KOMUNIKÁCIA

                                        <IconButton size="large">
                                            <VisibilityIcon
                                                fontSize="large"
                                                style={{  color: '#00FF0A' }}
                                            />
                                        </IconButton>

                                    </h2>
                                </Container>
                                : <img
                                    src={`${item.img}?w=162&auto=format`}
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                                />
                        }
                        {
                            index == 1
                                ? <Label></Label>
                                : <Label>{item.author}</Label>
                        }
                    </Stack>
                ))}
            </Masonry> */}

        </Box>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
        author: 'swabdesign',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
        author: 'Pavel Nekoranec',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
        author: 'Charles Deluvio',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
        author: 'Christian Mackie',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
        author: 'Darren Richardson',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
        author: 'Taylor Simpson',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
        author: 'Ben Kolde',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
        author: 'Philipp Berndt',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
        author: 'Jen P.',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
        author: 'Douglas Sheppard',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
        author: 'Fi Bell',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
        author: 'Hutomo Abrianto',
    },
];


