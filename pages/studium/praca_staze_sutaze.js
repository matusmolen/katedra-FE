import {Breadcrumbs, Container, Grid, Typography,} from '@mui/material';
import React from 'react';


import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AppLink from "../../utils/AppLink";

export const getStaticProps = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/works');
    const data = await res.json();

    return {
        props: {works: data},
        revalidate: 60
    }
}

export default function praca_staze_sutaze({works}) {


    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <AppLink underline="hover" color="inherit" href="../studium">
                    Štúdium
                </AppLink>
                <AppLink underline="hover" color="inherit" href="../studium">
                    Študent
                </AppLink>
                <Typography>Práca, stáže, súťaže</Typography>
            </Breadcrumbs>
            <Grid container justifyContent="space-evenly">
                <Grid item md={6}>
                    <h1>
                        Práca, stáže,
                        <br/>
                        súťaže
                    </h1>
                    <h5>
                        Pozri si prehľad príležitostí. Či už je to možnosť zapojiť sa do
                        súťaže, alebo si privyrobiť a zároveň zbierať skúsenosti z odboru.
                        Ponuky sú vždy čerstvé a pravidelne aktualizované.
                    </h5>
                </Grid>
                <Grid
                    item
                    md={6}
                    display={{xs: 'none', sm: 'none', md: 'flex'}}
                    justifyContent='center'
                    alignItems='center'
                >
                    <img
                        src={'/images/program_prestal_pracovat.png'}
                        alt="program prestal pracovať"
                        style={{maxWidth: '95%'}}
                    />
                </Grid>
            </Grid>


            <h3>Aktuálna ponuka príležitostí</h3>
            <Grid container spacing={2}>
                {works.map(work => (
                    <Grid item md={6} key={work.id}>
                        <Stack direction="row" spacing={1}>
                            <Chip
                                label={work.oddelenie}
                                color='primary'
                            />
                            <Chip
                                label={work.cinnost}
                                color='primary'
                            />
                        </Stack>

                        <h5>{work.name}</h5>
                        <p>
                            <strong>Kontakt: </strong>
                            {work.kontakt}
                        </p>
                        <p>
                            <strong>Datum zverejnenia: </strong>
                            {work.date}
                        </p>

                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

