import {Box, Fab, Grid, IconButton} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Dialog from "@mui/material/Dialog";
import React, {useState} from "react";
import CloseIcon from '@mui/icons-material/Close';
import {styled} from "@mui/system";


export const ImageWrapper = styled(Box)(() => ({
    alignItems:'center',
    justifyContent: 'center',
    position: 'relative',

    '&.show': {
        display: 'flex',
    },
    '&.hide': {
        display: 'none'
    },
    '& div': {
        height: 'calc(100vh - 64px)'
    },
    '& img': {
        display: 'block',
        overflow: 'hidden',
        transition: 'opacity 0.25s linear',
        maxHeight: 'calc(100vh - 64px)'
    },
    '& img.show': {
        height: '100%',
        opacity: 1,
    },
    '& img.hide': {
        height: 0,
        opacity: '0'
    }
}));

export default function GallerySlider({gallery}) {
    const [current, setCurrent] = useState(0)
    const images = gallery.images;
    const imagesLength = images.length;

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Box  sx={{position: 'relative', width: '100%', cursor:'pointer'}} onClick={() => setOpen(true)}>
                <img
                    src={images[0].formats.small.url}
                    className='image-contain'
                    loading='lazy'
                    alt={images[0].alternativeText}
                />
            </Box>
            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="lg"
                className={'gallery-slider'}
            >
                <Grid container spacing={1}>
                    <Grid
                        item
                        xs={12}
                        md={7}
                        sx={{
                            position:'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <ImageWrapper>
                            {
                                images.map((image, index) =>

                                        <img
                                            key={image.id}
                                            src={image?.url}
                                            alt={image?.alternativeText}
                                            className={`image-contain ${current === index ? 'show' : 'hide'}`}
                                            loading='lazy'
                                        />
                                )
                            }
                        </ImageWrapper>

                        <Fab
                            onClick={() => setCurrent((current - 1 + imagesLength) % imagesLength)}
                            size="small"
                            sx={{position: 'absolute', inset: 'auto auto auto 2em'}}
                        >
                            <ArrowBackIosIcon/>
                        </Fab>
                        <Fab
                            onClick={() => setCurrent((current + 1 + imagesLength) % imagesLength)}
                            size="small"
                            sx={{position: 'absolute', inset: 'auto 2em auto auto'}}
                        >
                            <ArrowForwardIosIcon/>
                        </Fab>
                    </Grid>
                    <Grid item xs={12} md={5} style={{padding:'2em'}}>
                        <IconButton
                            aria-label='close'
                            onClick={() => setOpen(false)}
                            sx={{display: 'flex', marginLeft: 'auto'}}
                        >
                            <CloseIcon fontSize='inherit' sx={{color: '#000000'}}/>
                        </IconButton>
                        <h4 style={{margin: 0}}>{gallery.author}</h4>
                        <h4 style={{marginTop: 5}}>{gallery.grade}</h4>
                        <h5>{gallery.title}</h5>
                        <p>{gallery.text}</p>
                    </Grid>
                </Grid>
            </Dialog>
        </>
    );
}
