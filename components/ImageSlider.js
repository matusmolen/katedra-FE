//------------------------------------------------------------------------------
// LEN NA SKUSANIE ROZNYCH VECI ABY SOM NEROZDRBALA UZ TAKMER HOTOVE STRANKY ---
//------------------------------------------------------------------------------
import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog';
import {Box, Button, Fab} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Image from "next/image";


export default function ImageSlider({galery}) {
    const [Current, setCurrent] = useState(0)
    const slidesLength = galery.length;

    //----- nastavenie dialogu -------------
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
                onClose={() => setOpen(false)}>

                <img src={galery[Current]?.url} width="550" alt={galery[Current]?.alternativeText}/>

                <Fab
                    onClick={() => setCurrent((Current + 1 + slidesLength) % slidesLength)}
                    size="small"
                    style={{position: 'absolute', bottom: "50%", left: 0}}>
                    <ArrowBackIosIcon/>
                </Fab>
                <Fab
                    onClick={() => setCurrent((Current - 1 + slidesLength) % slidesLength)}
                    size="small"
                    style={{position: 'absolute', bottom: "50%", right: 0}}>
                    <ArrowForwardIosIcon/>
                </Fab>

            </Dialog>

            {/* </Container> */}

        </>
    )
}