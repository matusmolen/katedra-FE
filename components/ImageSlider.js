import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import {Box, Button, Fab, IconButton} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import {ImageWrapper} from "./GallerySlider";

export default function ImageSlider({galery}) {
    const [current, setCurrent] = useState(0)
    const slidesLength = galery.length;

    const [open, setOpen] = React.useState(false);

    return (
        <>
            <Button
                variant="contained"
                color="primary"
                sx={{borderRadius: 20, margin:{sm: '1em', md:'4em'}}}
                onClick={() => setOpen(true)}
            >
                Zobraziť viac
                <Box
                    sx={{
                        position: 'absolute',
                        width: '300px',
                        height: '180px',
                        bottom: '-50px',
                        left: '-90px',
                    }}
                    display={{
                        xs: 'none',
                        sm: 'none',
                        md: 'block'
                    }}
                >
                    <img
                        src={'/images/sipky.png'}
                        alt="background_img"
                        className='image-contain'
                        loading='lazy'
                    />
                </Box>
            </Button>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="lg"
                className={'gallery-slider'}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
            >
                <Box
                    sx={{
                        position:'relative',
                        display: 'flex',
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <ImageWrapper>
                    {
                        galery.map((image, index) =>
                            <img
                                    key={image.id}
                                    src={image.url}
                                    alt={image.alternativeText}
                                    className={`image-contain ${current === index ? 'show' : 'hide'}`}
                                    loading={'lazy'}
                                    style={{maxHeight: 'calc(100vh - 64px)'}}
                            />
                        )
                    }
                    </ImageWrapper>

                    <Fab
                        onClick={() => setCurrent((current - 1 + slidesLength) % slidesLength)}
                        size="small"
                        sx={{position: 'absolute', inset: 'auto auto auto 2em'}}
                    >
                        <ArrowBackIosIcon/>
                    </Fab>
                    <Fab
                        onClick={() => setCurrent((current + 1 + slidesLength) % slidesLength)}
                        size="small"
                        sx={{position: 'absolute', inset: 'auto 2em auto auto'}}
                    >
                        <ArrowForwardIosIcon/>
                    </Fab>
                    <IconButton
                        aria-label='close'
                        onClick={() => setOpen(false)}
                        sx={{position:'absolute', inset: '0.5em 0.5em auto auto'}}
                        size='large'

                    >
                        <CloseIcon fontSize='inherit' sx={{color: '#000000'}}/>
                    </IconButton>
                </Box>
            </Dialog>
        </>
    )
}
