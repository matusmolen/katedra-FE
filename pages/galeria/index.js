
import {
    Container,
    Breadcrumbs,
    Typography,
    Grid,
    Link,
    Button,
    Collapse,
} from '@material-ui/core';
import MasonryInfiniteScroller from 'react-masonry-infinite';
import * as React from 'react';
import Box from '@mui/material/Box';
import { maxWidth } from '@mui/system';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';

export default function ResponsiveSpacing() {


    const Label = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        color: theme.palette.text.secondary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    return (

        <Box sx={{ width: maxWidth, height: 800, overflowY: 'scroll', padding: '40px' }}>
            <div style={{ marginLeft: 100}}>   
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Link underline="hover" color="inherit" href="../galeria/">
                    Galéria
                </Link>
                <Typography color="primary">2020/2021</Typography>
            </Breadcrumbs>

            <div style={{marginTop: 20, marginBottom: 80}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Grid item>
                        <Button
                            size="large"
                            color="primary"
                            variant="contained"
                            style={{
                                backgroundColor: '#000000',
                                color: '#ffffff',
                                borderRadius: 20,
                                
                            }}
                        >
                            Industrial
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            size="large"
                            color="primary"
                            variant="contained"
                            style={{
                                backgroundColor: '#000000',
                                color: '#ffffff',
                                borderRadius: 20,
                                marginLeft: 20
                            }}
                        >
                            Priestor
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            size="large"
                            color="primary"
                            variant="contained"
                            style={{
                                backgroundColor: '#000000',
                                color: '#ffffff',
                                borderRadius: 20,
                                marginLeft: 20
                            }}
                        >
                            Inovácia
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            size="large"
                            color="primary"
                            variant="contained"
                            style={{ borderRadius: 20, marginLeft: 20 }}
                        >
                            Viz. komunikácia
                        </Button>
                    </Grid>
                </Grid>
            </div>
            </div> 
            <Masonry columns={4} spacing={1}>
              {itemData.map((item, index) => (
                <Stack key={index}>
                  <img
                    src={`${item.img}?w=162&auto=format`}
                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    style={{ borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}
                  />
                </Stack>
              ))}
            </Masonry>
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


