import {Box, Fab, Grid} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Dialog from "@mui/material/Dialog";
import React, {useState} from "react";


export default function GallerySlider({gallery}) {
    const [current, setCurrent] = useState(0)
    const images = gallery.images;
    const imagesLength = images.length;

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Box position='relative' width='100%'>
                <img
                    src={`${images[0].url}?w=162&auto=format`}
                    srcSet={`${images[0].url}?w=162&auto=format&dpr=2 2x`}
                    alt={images[0].alternativeText}
                    loading="lazy"
                    style={{cursor: 'pointer', width:'100%', height:'auto'}}
                    onClick={() => setOpen(true)}
                />
            </Box>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="lg"
            >
                <Grid container spacing={1}>
                    <Grid
                        item
                        md={7}
                        sx={{
                            position:'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems:'center',
                        }}
                    >
                        <img
                            src={images[current]?.url}
                             alt={images[current]?.alternativeText}
                            style={{height: '100%', width: '100%', objectFit: 'contain'}}
                        />
                        <Fab
                            onClick={() => setCurrent((current + 1 + imagesLength) % imagesLength)}
                            size="small"
                            sx={{position: 'absolute', inset: 'auto auto auto 2em'}}
                        >
                            <ArrowBackIosIcon/>
                        </Fab>
                        <Fab
                            onClick={() => setCurrent((current - 1 + imagesLength) % imagesLength)}
                            size="small"
                            sx={{position: 'absolute', inset: 'auto 2em auto auto'}}
                        >
                            <ArrowForwardIosIcon/>
                        </Fab>
                    </Grid>
                    <Grid item md={5} style={{padding:'2em'}}>
                        <h4 style={{marginBottom: 0}}>{gallery.author}</h4>
                        <h4 style={{marginTop: 5}}>{gallery.grade}</h4>
                        <h5>{gallery.title}</h5>
                        <p>{gallery.text}</p>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    );
}