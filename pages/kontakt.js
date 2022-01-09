import {Box, Breadcrumbs, Container, Grid, Typography} from "@mui/material";

import axios from "axios";
import theme from "../styles/theme";
import React from "react";
import ContactBox from "../components/ContactBox";
import KontaktnyFormular from "../components/KontaktnyFormular";

export async function getStaticProps() {
    const kontaktyRes = await axios.get("https://katedra-dizajnu.herokuapp.com/kontakt-pages");

    return {
        props: {
            kontakty: kontaktyRes.data
        },
    }
}


export default function KontaktPage({kontakty}) {
    return (
        <Container>
            <Breadcrumbs>
                <Typography>KONTAKT</Typography>
            </Breadcrumbs>
            <Grid container>
                <Grid item sm={12} md={4}>
                    <h1 style={{margin: '40px 0'}}>Kde nás nájdete?</h1>
                    <p>Watsonova 4, <br/> 040 20 Košice - Sever</p>

                    <ContactBox kontakt={kontakty[3]}/>
                </Grid>
                <Grid item sm={12} md={7}
                      sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'relative',
                          marginLeft: 'auto',
                      }}
                >
                    <img
                        src='/images/kontakt_mapa.png'
                        alt="mapka"
                        width='100%'
                        height='auto'
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            left: '20%',
                            backgroundColor: theme.palette.primary.main,
                            zIndex: -1
                        }}
                    />
                </Grid>
            </Grid>

            <Grid
                container
                spacing={4}
                mt={2}
            >
                {kontakty.slice(0, 3).map((kontakt, index) =>
                    <Grid item sm={12} md={6} lg={4}>
                        <ContactBox kontakt={kontakt}/>
                    </Grid>
                )}
            </Grid>

            <Grid container spacig={1} alignItems={'center'}>
                <Grid item sm={12} md={6}>
                    <h2>Kontaktný formulár</h2>
                </Grid>
                <Grid item sm={12} md={6}>
                    <img
                        src='/images/kontaktny_formular_grafika.png'
                        width='100%'
                        height='auto'
                        alt="kontakt"
                    />
                </Grid>
            </Grid>
            <KontaktnyFormular/>
        </Container>
    )
}
