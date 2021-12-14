import React from 'react'
import {
    Container,
    Grid,
    Button,
    Breadcrumbs,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import obrazok from '../../../public/images/galeria.png';

export const getStaticProps = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/vystavas');
    const data = await res.json();

    return {
        props: { vystavy: data },
    };
};

export default function galeriaVystav({ vystavy }) {

    const najnovsie = vystavy.slice(0, 4);

    return (
        <Container>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" separator=">">
                    <Typography color="text.primary">Galéria výstav</Typography>
                </Breadcrumbs>

                <Grid container>
                    <Grid item xs={8}>
                        <h1>Výstavná činnosť na katedre</h1>
                        <h5>
                            Kopa dizajnu na jednom mieste! Ak si náhodou nestihol navštíviť niektorú z výstav nezúfaj. Ponúkame ti prehľad exhibícii, ktoré organizovala katedra dizajnu. Nájdeš tu pestrý mix grafických ale aj produktových prác.
                        </h5>
                    </Grid>
                    <Grid item xs={4}>
                        <div style={{ marginTop: '100px' }}>
                            <Image src={obrazok} alt="free fonts" />
                        </div>
                    </Grid>
                </Grid>
            </Container>

            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start">
                    {najnovsie.map(vystava => (
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
                                        // className={classes.aktualityButton}
                                        variant="contained"
                                        color="primary"
                                        style={{ borderRadius: 20 }}
                                        href={'/galeria/vystavy/' + vystava.id}
                                    >
                                        Zobraziť viac
                                    </Button>
                                </div>
                                <img src={vystava.preview_img.url} alt="obrazok" height="270" width="550" style={{ objectFit: 'cover' }}/>
                            </div>
                            <h4>
                                {vystava.title}
                            </h4>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container style={{ textAlign: 'right', marginBottom: "30px" }}>
                <Button href="/galeria/vystavy/starsie" style={{ color: '#000000' }}>
                    Zobraziť staršie
                </Button>
            </Container>
        </Container>
    )
}
