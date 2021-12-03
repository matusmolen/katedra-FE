//------------------------------------------------------------------------------
// LEN NA SKUSANIE ROZNYCH VECI ABY SOM NEROZDRBALA UZ TAKMER HOTOVE STRANKY ---

import { Container, Grid } from "@mui/material";
import { useState } from "react";


export const getStaticProps = async () => {
  const res = await fetch('https://katedra-dizajnu.herokuapp.com/galleries');
  const data = await res.json();

  return {
    props: { galeries: data }
  }
}

//------------------------------------------------------------------------------
export default function Pokus({ galeries }) {

  return (
    <Container>
      <h1>pokus</h1>
      <p>LEN NA SKUSANIE ROZNYCH VECI ABY SOM NEROZDRBALA UZ TAKMER HOTOVE STRANKY </p>
      
    </Container>
  )
}