import {
    Container,
    Breadcrumbs,
    Link,
    Typography,
    Grid,
    Button,
} from '@material-ui/core';
import React from 'react';
import Image from 'next/image';

function Ucitelia({ teachers }) {
    const pocetOsobL = Math.ceil(teachers.length / 2);
    const Osoby1 = teachers.slice(0, pocetOsobL);
    const Osoby2 = teachers.slice(pocetOsobL, teachers.length);
    return (<>
      {teachers ? (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Link underline="hover" color="inherit" href="../studium">
                    Štúdium
                </Link>
                <Link underline="hover" color="inherit" href="../studium">
                    Študent
                </Link>
                <Typography color="text.primary">Spoznaj učiteľov</Typography>
            </Breadcrumbs>
            <Grid container justifyContent="space-evenly">
                <Grid item xs={6}>
                    <h1>
                        Spoznaj
                        <br />
                        učiteľov
                    </h1>
                    <h5>
                        Katedra dizajnu je plná fundovaných odborníkov.
                        V tejto sekcii sa dozvieš viac o tom, ako sa pedagógovia dostali na univerzitu a pozrieš si galériu ich profesionálnych výstupov.
                    </h5>
                </Grid>
                <Grid item xs={6} style={{ marginTop: 35 }}>
                    {/* <Image src={spoznaj_ucitelov_obr} alt="obrazok" /> */}
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
                            {Osoby2.map(teacher => (
                                <Grid item key={teacher.id}>
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
                                                style={{ borderRadius: 20 }}
                                                href={'/studium/spoznaj_ucitelov/' + teacher.id}
                                            >
                                                Zobraziť profil
                                            </Button>
                                        </div>
                                        {/* <img src={'https://katedra-dizajnu.herokuapp.com' + teacher.profile.url} alt="profilovy obrazok" width="450" height="450" style={{ borderRadius: '50%' }} /> */}
                                    </div>
                                    <h3 style={{ textAlign: 'center' }}>
                                        {teacher.name}
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
                            {Osoby1.map(teacher => (
                                <Grid item key={teacher.id}>
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
                                                style={{ borderRadius: 20 }}
                                                href={'/studium/spoznaj_ucitelov/' + teacher.id}
                                            >
                                                Zobraziť profil
                                            </Button>
                                        </div>
                                        {/* <img src={'https://katedra-dizajnu.herokuapp.com' + teacher.profile.url} alt="profilovy obrazok" width="450" height="450" style={{ borderRadius: '50%' }} /> */}
                                    </div>
                                    <h3 style={{ textAlign: 'center' }}>
                                        {teacher.name}
                                    </h3>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>
                </Grid>
            </Container>
        </Container>
        ) : (
          <div></div>
        )}  
    </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/teachers');
    const data = await res.json();

    return {
        props: { teachers: data }
    }
}

export default Ucitelia
