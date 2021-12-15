import {
    Container,
    Breadcrumbs,
    Link,
    Typography,
    Grid,
    Button,
} from '@material-ui/core';
import React from 'react';
import uspesni_abs from '../../../public/images/uspesni_absolventi.png';
import Image from 'next/image';

export async function getStaticProps() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/absolvents');
    const data = await res.json();

    return {
        props: { absolventi: data }
    }
}

export default function Absolventi({ absolventi }) {
    const pocetOsobL = Math.ceil(absolventi.length / 2);
    const Osoby1 = absolventi.slice(0, pocetOsobL);
    const Osoby2 = absolventi.slice(pocetOsobL, absolventi.length);
    return (<>
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Link underline="hover" color="inherit" href="/studium">
                    Štúdium
                </Link>
                <Link underline="hover" color="inherit" href="/uchadzac">
                    Uchádzač
                </Link>
                <Typography color="primary">Úspešní absolventi</Typography>
            </Breadcrumbs>
            <Grid container justifyContent="space-evenly">
                <Grid item xs={6}>
                    <h1>
                        Úspešní
                        <br />
                        absolventi
                    </h1>
                    <h5>
                        V tejto sekcii ti predstavíme niekoľko šikovných dizajnérov,
                        ktorých alma mater je Technická univerzita v Košiciach. Prečítaj
                        si o ich úspešnom zaradení sa medzi profesionálov, ale aj o tom,
                        ako vyzeral ich študijný život.
                    </h5>
                </Grid>
                <Grid item xs={6} style={{ marginTop: 35 }}>
                    <div style={{ marginLeft: 100 }}>
                        <Image src={uspesni_abs} alt="obrazok" />
                    </div>
                </Grid>
            </Grid>

            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                >

                    <Grid item>

                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            style={{ marginTop: 200 }}
                            spacing={2}

                        >
                            {Osoby1.map(absolvent => (
                                <Grid item key={absolvent.id}>
                                    <div style={{ position: 'relative' }}>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: '40px',
                                                left: '0',
                                                width: '100%',
                                                textAlign: 'center',
                                                zIndex: 1,
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                style={{ borderRadius: 15 }}
                                                href={'/uchadzac/uspesni_absolventi/' + absolvent.id}
                                            >
                                                Zobraziť profil
                                            </Button>
                                        </div>
                                        <img src={absolvent.profile.url} alt="profilovy obrazok" width="450" height="450" style={{ borderRadius: '50%' }} />
                                    </div>
                                    <h3 style={{ textAlign: 'center' }}>
                                        {absolvent.name}
                                    </h3>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>

                    <Grid item >

                        <Grid
                            container
                            direction="column"
                            alignItems="center"
                            spacing={2}

                        >
                            {Osoby2.map(absolvent => (
                                <Grid item key={absolvent.id}>
                                    <div style={{ position: 'relative' }}>
                                        <div
                                            style={{
                                                position: 'absolute',
                                                bottom: '40px',
                                                left: '0',
                                                width: '100%',
                                                textAlign: 'center',
                                                zIndex: 1,
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                style={{ borderRadius: 15 }}
                                                href={'/uchadzac/uspesni_absolventi/' + absolvent.id}
                                            >
                                                Zobraziť profil
                                            </Button>
                                        </div>
                                        <img src={absolvent.profile.url} alt="profilovy obrazok" width="450" height="450" style={{ borderRadius: '50%' }} />
                                    </div>
                                    <h3 style={{ textAlign: 'center' }}>
                                        {absolvent.name}
                                    </h3>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>
                </Grid>
            </Container>

        </Container>
    </>
    )

}