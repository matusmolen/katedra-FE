import {Box, Breadcrumbs, Button, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import axios from 'axios';
import AppLink from "../../utils/AppLink";
import theme from "../../styles/theme";

export async function getStaticProps() {
    const harmonogramRes = await axios.get('https://katedra-dizajnu.herokuapp.com/harmonogramy');

    return {
        props: {
            harmonogram: harmonogramRes.data,
        },
        revalidate: 60
    };
}

export default function student({harmonogram}) {
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Typography>
                    Štúdium
                </Typography>
                <Typography>Študent</Typography>
            </Breadcrumbs>

            <AppLink
                target='_blank'
                href={harmonogram.studium.url}
                color="#000000"
            >
                <h5>Časový harmonogram štúdia {harmonogram.rok}</h5>
            </AppLink>
            <Grid container>
                <Grid item md={6}>
                    <AppLink
                        target="_blank"
                        href={harmonogram.bc_1rocnik.url}
                        color="#000000"
                    >
                        <h5>Bc. 1. ročník Rozvrh hodín ZS {harmonogram.rok}</h5>
                    </AppLink>
                </Grid>
                <Grid item>
                    <AppLink
                        target="_blank"
                        href={harmonogram.bc_2_4rocnik.url}
                        color="#000000"
                    >
                        <h5>Bc. 2. - 4. ročník Rozvrh hodín ZS {harmonogram.rok}</h5>
                    </AppLink>
                </Grid>
                <Grid item md={6}>
                    <AppLink
                        target="_blank"
                        href={harmonogram.mgr.url}
                        color="#000000"
                    >
                        <h5> Mgr. 1. - 2. ročník Rozvrh hodín ZS {harmonogram.rok}</h5>
                    </AppLink>
                </Grid>
            </Grid>


            <Grid container >
                <Grid item md={6}>
                    <h1>
                        Práca, stáže,
                        <br/>
                        súťaže
                    </h1>
                    <h5>
                        Rozmýšľaš čo s voľným časom? Chceš sa zdokonaľovať a učiť sa aj
                        mimo semestrálnych zadaní? Ak tvoja odpoveď znie áno, potom je
                        táto sekcia presne to čo práve hľadáš.
                    </h5>
                    <Button variant="contained"
                        sx={{
                            backgroundColor: '#000000',
                            color: '#ffffff',
                            borderRadius: 20,
                        }}
                    >
                        <AppLink
                            href="/studium/praca_staze_sutaze"
                            color="#ffffff"
                            underline="none"
                        >
                            Zobraziť viac
                        </AppLink>{' '}
                    </Button>
                </Grid>
                <Grid item md={6} sx={{position: 'relative'}}>
                    <Image src='/images/deadline.png' layout='fill' objectFit='contain' alt="deadline"/>
                </Grid>
            </Grid>


            <Grid container justifyContent="space-evenly">
                <Grid item md={5} sx={{position: 'relative'}}>
                    <Image src='/images/dama_s_titulom.png' layout='fill' objectFit='contain' alt="dama s titulom"/>
                </Grid>
                <Grid item md={5} sx={{position:'relative', padding: '2em'}}>
                    <h1 style={{fontWeight: 'normal'}}>Spoznaj učiteľov</h1>
                    <h5 style={{fontWeight: 'normal'}}>
                        Na prednáškach a ateliérovej výuke stráviš veľa času. Rôzne predmety,
                        rôzni učitelia a veľa skúseností za nimi. V tejto sekcii sa
                        dozvieš niečo viac o svojich pedagógoch. Zistíš, že majú bohaté
                        skúsenosti, venujú sa dizajnu a dosahujú úspechy aj mimo
                        akademickej pôdy.{' '}
                    </h5>
                    <Button variant="contained"
                            sx={{
                                backgroundColor: '#000000',
                                color: '#ffffff',
                                borderRadius: 20,
                            }}
                    >
                        <AppLink
                            href="/studium/spoznaj_ucitelov"
                            color="#ffffff"
                            underline="none"
                        >
                            Zobraziť viac
                        </AppLink>
                    </Button>
                    <Box
                        sx={{
                            position:'absolute',
                            backgroundColor: theme.palette.primary.main,
                            inset: '9em 0 0 0',
                            zIndex: -1
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}
