import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import {Box, Button, Fab, IconButton} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from "next/image";
import CloseIcon from '@mui/icons-material/Close';
import {styled} from "@mui/system";

const ImageWrapper = styled(Box)(({theme}) => ({
    '& > div': {
        maxHeight: '80vh'
    },
}));


export default function ImageSlider({galery}) {
    const [Current, setCurrent] = useState(0)
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
                    <Image src='/images/sipky.png' alt="backgroundimg" layout='fill' objectFit='contain'/>
                </Box>
            </Button>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullWidth
                maxWidth="lg"
            >
                <Box
                    sx={{
                        maxHeight:'90vh',
                        position:'relative',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                    }}
                >
                    <ImageWrapper>
                        <Image
                            src={galery[Current]?.url}
                            alt={galery[Current]?.alternativeText}
                            height={galery[Current]?.height}
                            width={galery[Current]?.width}
                            objectFit={'contain'}
                        />
                    </ImageWrapper>
                    <Fab
                        onClick={() => setCurrent((Current + 1 + slidesLength) % slidesLength)}
                        size="small"
                        sx={{position: 'absolute', inset: 'auto auto auto 2em'}}
                    >
                        <ArrowBackIosIcon/>
                    </Fab>
                    <Fab
                        onClick={() => setCurrent((Current - 1 + slidesLength) % slidesLength)}
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