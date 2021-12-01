import { Button, Container, Grid, Link, Typography } from '@mui/material';
import React from 'react';
import deadline from '../../public/images/deadline.png';
import dama from '../../public/images/dama_s_titulom.png';
import Image from 'next/image';
import { ClassNames } from '@emotion/react';
import useStyles from '../../utils/styles';
import { Breadcrumbs } from '@material-ui/core';
import axios from 'axios';
import sipka from '../../public/images/zelenasipka.png';

export async function getStaticProps() {
  const harmonogramRes = await axios.get('http://localhost:1337/harmonogramy');

  return {
    props: {
      harmonogram: harmonogramRes.data,
    },
  };
}

export default function student({ harmonogram }) {
  const classes = useStyles();
  return (
    <div style={{ position: 'relative' }}>
      <Container>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link underline="hover" color="inherit" href="../studium/student">
            Štúdium
          </Link>
          <Typography color="text.primary">Študent</Typography>
        </Breadcrumbs>

        <a
          href={'http://localhost:1337' + harmonogram.studium.url}
          color="#000000"
        >
          <h5>Časový harmonogram štúdia {harmonogram.rok}</h5>
        </a>
        <Grid container>
          <Grid item xs={6}>
            <Link
              href={'http://localhost:1337' + harmonogram.bc_1rocnik.url}
              color="#000000"
            >
              <h5>Bc. 1. ročník Rozvrh hodín ZS {harmonogram.rok}</h5>
            </Link>
            <Link
              href={'http://localhost:1337' + harmonogram.bc_2_4rocnik.url}
              color="#000000"
            >
              <h5>Bc. 2. - 4. ročník Rozvrh hodín ZS {harmonogram.rok}</h5>
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Link
              href={'http://localhost:1337' + harmonogram.mgr.url}
              color="#000000"
            >
              <h5> Mgr. 1. - 2. ročník Rozvrh hodín ZS {harmonogram.rok}</h5>
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container justifyContent="space-evenly">
          <Grid item xs={6}>
            <h1>
              Práca, stáže,
              <br />
              súťaže
            </h1>
            <h5>
              Rozmýšľaš čo s voľným časom? Chceš sa zdokonaľovať a učiť sa aj
              mimo semestrálnych zadaní? Ak tvoja odpoveď znie áno, potom je
              táto sekcia presne to čo práve hľadáš.
            </h5>
            <Button variant="contained" className={classes.studiumButton}>
              <Link
                href="/studium/praca_staze_sutaze"
                color="#ffffff"
                underline="none"
              >
                Zobraziť viac
              </Link>{' '}
            </Button>
          </Grid>
          <Grid item xs={6}>
            <div style={{ marginTop: 100 }}>
              <Image src={deadline} alt="deadline" />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container
        style={{ marginBottom: 15 }}
        // style={{ position: 'relative' }}
      >
        {/* <div style={{ position: 'relative' }}> */}
        <Grid container justifyContent="space-evenly" spacing={2}>
          <Grid item xs={6} style={{ zIndex: 2 }}>
            <Image src={dama} alt="dama s titulom" />
          </Grid>
          <Grid item xs={5} style={{ marginTop: 50, zIndex: 2 }}>
            <h1 style={{ fontWeight: 'normal' }}>Spoznaj učiteľov</h1>
            <h5 style={{ fontWeight: 'normal' }}>
              Na prednáškach a konzultáciách stráviš veľa času. Rôzne predmety,
              rôzni učitelia a veľa skúseností za nimi. V tejto sekcii sa
              dozvieš niečo viac o svojich pedagógoch. Zistíš, že majú bohaté
              skúsenosti, venujú sa dizajnu a dosahujú úspechy aj mimo
              akademickej pôdy.{' '}
            </h5>
            <Button variant="contained" className={classes.studiumButton}>
              <Link
                href="/studium/spoznaj_ucitelov"
                color="#ffffff"
                underline="none"
              >
                Zobraziť viac
              </Link>
            </Button>
          </Grid>
        </Grid>
        {/* </div> */}
      </Container>
      <div
        style={{
          position: 'absolute',
          width: 650,
          height: 547,
          bottom: 0,
          right: 135,
          backgroundColor: '#00FF0A',
          zIndex: 1,
        }}
      ></div>
      <div style={{ position: 'absolute', top: 50, left: 600 }}>
        <Image src={sipka} height="56px" width="98px" alt="backgroundimg" />
      </div>
    </div>
  );
}
