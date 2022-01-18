import {Breadcrumbs, Container, Grid, Typography,} from '@mui/material';
import React from 'react';
import AppLink from "../../../utils/AppLink";
import PeopleGrid from "../../../components/people/PeopleGrid";
import Image from "next/image";

function Ucitelia({teachers}) {
    return (<>
            {teachers ? (
                <Container>
                    <Breadcrumbs aria-label="breadcrumb" separator=">">
                        <AppLink underline="hover" color="inherit" href="../studium">
                            Štúdium
                        </AppLink>
                        <AppLink underline="hover" color="inherit" href="../studium">
                            Študent
                        </AppLink>
                        <Typography>Spoznaj učiteľov</Typography>
                    </Breadcrumbs>
                    <Grid container justifyContent="space-evenly">
                        <Grid item md={6}>
                            <h1>
                                Spoznaj
                                <br/>
                                učiteľov
                            </h1>
                            <h5>
                                Katedra dizajnu je plná fundovaných odborníkov.
                                V tejto sekcii sa dozvieš viac o tom, ako sa pedagógovia dostali na univerzitu a pozrieš
                                si galériu ich profesionálnych výstupov.
                            </h5>
                        </Grid>
                        <Grid item md={6} sx={{position:'relative'}}>
                             <Image
                                 src='/images/spoznaj_ucitelov.png'
                                 layout='fill'
                                 alt="obrazok spoznaj ucitelov"
                             />
                        </Grid>
                    </Grid>
                    <PeopleGrid route='/studium/spoznaj_ucitelov' people={teachers} cols={3}/>
                </Container>
            ) : (
                <div/>
            )}
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/teachers?_sort=published_at');
    const data = await res.json();

    return {
        props: {teachers: data},
        revalidate: 60
    }
}

export default Ucitelia
