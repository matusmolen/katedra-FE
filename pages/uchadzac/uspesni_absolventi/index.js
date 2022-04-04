import {Breadcrumbs, Container, Grid, Typography,} from '@mui/material';
import React from 'react';
import AppLink from "../../../utils/AppLink";
import PeopleGrid from "../../../components/people/PeopleGrid";

export async function getStaticProps() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/absolvents');
    const data = await res.json();

    return {
        props: {absolventi: data},
        revalidate: 60
    }
}

export default function Absolventi({absolventi}) {
    return (<>
            <Container>
                <Breadcrumbs aria-label="breadcrumb" separator=">">
                    <AppLink underline="hover" color="inherit" href="/studium">
                        Štúdium
                    </AppLink>
                    <AppLink underline="hover" color="inherit" href="/uchadzac">
                        Uchádzač
                    </AppLink>
                    <Typography color="status.info">Úspešní absolventi</Typography>
                </Breadcrumbs>
                <Grid container justifyContent="space-evenly" marginBottom={4}>
                    <Grid item md={6}>
                        <h1>
                            Úspešní
                            <br/>
                            absolventi
                        </h1>
                        <h5>
                            V tejto sekcii ti predstavíme niekoľko šikovných dizajnérov,
                            ktorých alma mater je Technická univerzita v Košiciach. Prečítaj
                            si o ich úspešnom zaradení sa medzi profesionálov, ale aj o tom,
                            ako vyzeral ich študijný život.
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
                            src={'/images/uspesni_absolventi.png'}
                            alt="uspesni absolventi"
                            style={{maxWidth: '85%'}}
                        />
                    </Grid>
                </Grid>

                <PeopleGrid people={absolventi} route='/uchadzac/uspesni_absolventi'/>

            </Container>
        </>
    )

}
