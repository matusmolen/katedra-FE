//------------------------------------------------------------------------------
// LEN NA SKUSANIE ROZNYCH VECI ABY SOM NEROZDRBALA UZ TAKMER HOTOVE STRANKY ---
//------------------------------------------------------------------------------
import React, { useState } from 'react'
import Dialog from '@mui/material/Dialog';
import { Button, Container, Fab } from "@material-ui/core";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



export default function ImageSlider({ galery }) {
  const [Current, setCurrent] = useState(0)
  // console.log(galeria);
  // const galeria = param.galery;

  const slidesLength = galery.length;

  // console.log(slidesLength);

  const nextSlide = () => {
    setCurrent(
      Current == slidesLength - 1
        ? 0
        : Current + 1
    )
  }

  const prevSlide = () => {
    setCurrent(
      Current == 0
        ? slidesLength - 1
        : Current - 1
    )
  }


  //----- nastavenie dialogu -------------
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    // style={{ marginBottom: 30 }}
    <>
      {/* <Container> */}
      <Button variant="contained" color="primary" onClick={handleClickOpen} style={{ borderRadius: 20 }}>
        Zobraziť viac
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}>

        <img src={'http://localhost:1337' + galery[Current].url} width="550" />

        <Fab
          onClick={prevSlide}
          size="small"
          style={{ position: 'absolute', bottom: "50%", left: 0 }}>
          <ArrowBackIosIcon />
        </Fab>
        <Fab
          onClick={nextSlide}
          size="small"
          style={{ position: 'absolute', bottom: "50%", right: 0 }}>
          <ArrowForwardIosIcon />
        </Fab>

      </Dialog>

      {/* </Container> */}

    </>
  )
}