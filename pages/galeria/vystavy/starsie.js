import { Container, Grid, Button, Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import useStyles from '../../../utils/styles';

export const getStaticProps = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/vystavas');
    const data = await res.json();

    return {
        props: { vystavy: data }
    }
}

export default function starsieVystavy({ vystavy }) {
    const classes = useStyles();
    const pocetVystav = vystavy.length;
    const poslednyIndex = pocetVystav-1;

    const posledna = vystavy[poslednyIndex];
    const ostatne = vystavy.slice(0, pocetVystav - 1);
    var parnyPocet;

    {
        (pocetVystav % 2) == 0
            ? parnyPocet = true
            : parnyPocet = false
    }

    return (
        <>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" separator=">">
                    <Link underline="hover" color="inherit" href="/galeria/vystavy">
                        Galéria výstav
                    </Link>
                    <Typography color="text.primary">Staršie výstavy</Typography>
                </Breadcrumbs>
                <Container>
                    <h2>Staršie výstavy</h2>
                    {/* <Grid container>
                        <Grid item xs={6}>
                            <h1>Čo je nové na katedre</h1>
                            <br />
                            <h5>
                                Nestrať prehľad o tom, čo sa práve deje na katedre. Prinášame ti
                                aktuálne informácie o významných udalostiach, ale aj užitočné
                                správy, ktoré by nemali ujsť tvojej pozornosti.
                            </h5>
                        </Grid>
                        <Grid item xs={6}>
                            <Image src={obrazok} alt="free fonts" />
                        </Grid>
                    </Grid> */}

                    {
                        parnyPocet
                            ? <Grid
                                container
                                direction='row'
                                justifyContent="space-between"
                                alignItems="flex-start"
                                spacing={4}
                            >
                                {vystavy.map(vystava => (
                                    <Grid item xs={6} key={vystava.id}>
                                        <div style={{ position: 'relative', width: '550px' }}>
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '32px',
                                                    right: '32px',
                                                    width: '100%',
                                                    textAlign: 'right',
                                                    zIndex: 1,
                                                }}
                                            >
                                                <Button
                                                    // className={classes.vystavyButton}
                                                    variant="contained"
                                                    color="primary"
                                                    style={{ borderRadius: 20 }}
                                                    href={'/galeria/vystavy/' + vystava.id}
                                                >
                                                    Zobraziť viac
                                                </Button>
                                            </div>
                                            {/* <img src={'https://katedra-dizajnu.herokuapp.com' + vystava.preview_img.url} alt="obrazok" height="270" width="550" /> */}
                                        </div>
                                        <h4>
                                            {vystava.title}
                                        </h4>
                                    </Grid>
                                ))}
                            </Grid>
                            : <>
                                <Grid
                                    container
                                    direction='row'
                                    justifyContent="space-between"
                                    alignItems="flex-start"
                                    spacing={4}
                                >
                                    {ostatne.map(vystava => (
                                        <Grid item xs={6} key={vystava.id}>
                                            <div style={{ position: 'relative', width: '550px' }}>
                                                <div
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: '32px',
                                                        right: '32px',
                                                        width: '100%',
                                                        textAlign: 'right',
                                                        zIndex: 1,
                                                    }}
                                                >
                                                    <Button
                                                        // className={classes.vystavyButton}
                                                        variant="contained"
                                                        color="primary"
                                                        style={{ borderRadius: 20 }}
                                                        href={'/galeria/vystavy/' + vystava.id}
                                                    >
                                                        Zobraziť viac
                                                    </Button>
                                                </div>
                                                <img src={'https://katedra-dizajnu.herokuapp.com' + vystava.preview_img.url} alt="obrazok" height="270" width="100%" />
                                            </div>
                                            <h4>
                                                {vystava.title}
                                            </h4>
                                        </Grid>
                                    ))}
                                    <Grid item xs={12}>
                                        <div style={{ position: 'relative' }}>
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    bottom: '32px',
                                                    right: '32px',
                                                    width: '100%',
                                                    textAlign: 'right',
                                                    zIndex: 1,
                                                }}
                                            >
                                                <Button
                                                    // className={classes.vystavyButton}
                                                    style={{borderRadius: 20}}
                                                    variant="contained"
                                                    color="primary"
                                                    href={'/galeria/vystavy/' + posledna.id}
                                                >
                                                    Zobraziť viac
                                                </Button>
                                            </div>
                                            <img src={'https://katedra-dizajnu.herokuapp.com' + posledna.preview_img.url} alt="obrazok" height="270" width="100%" />
                                        </div>
                                        <h4>
                                            {posledna.title}
                                        </h4>
                                    </Grid>
                                </Grid>
                            </>
                    }
                </Container>
                <Container style={{ textAlign: 'right', marginBottom: "30px" }}>
                    <Button href="/galeria/vystavy" style={{ color: '#000000' }}>
                       späť
                    </Button>
                </Container>
            </Container>
        </>
    )
}