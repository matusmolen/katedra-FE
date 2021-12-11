import {
  Container,
  Grid,
  Button,
  Breadcrumbs,
  Typography,
} from '@mui/material';
import React from 'react';
import Image from 'next/image';
import obrazok from '../../public/images/Frame.png';
import useStyles from '../../utils/styles';


function Aktuality({ aktuality }) {
  const classes = useStyles();
  const pocetAktualit = aktuality.length;
  const polka = Math.ceil(pocetAktualit / 2);
  const latestAkt = aktuality
  const aktuality1 = aktuality.slice(0, polka);
  const aktuality2 = aktuality.slice(polka, pocetAktualit);
  return (
    <Container>
      <Container>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Typography color="text.primary">AKTUALITY</Typography>
        </Breadcrumbs>
        <Grid container>
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
        </Grid>
      </Container>
      <br />
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Grid item>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
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
                      className={classes.aktualityButton}
                      variant="contained"
                      color="primary"
                      // href={'/aktuality/' + latestAkt[2].id}
                    >
                      Zobraziť viac
                    </Button>
                  </div>
                  <img
                    src={latestAkt[2].preview_img.url}
                    alt="obrazok"
                    height="270"
                    width="550"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4>{latestAkt[2].title}</h4>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
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
                      className={classes.aktualityButton}
                      variant="contained"
                      color="primary"
                      href={'/aktuality/' + latestAkt[1].id}
                    >
                      Zobraziť viac
                    </Button>
                  </div>
                  <img
                    src={latestAkt[1].preview_img.url}
                    alt="obrazok"
                    height="270"
                    width="550"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <h4>{latestAkt[1].title}</h4>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <br />
      <Container>
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
              variant="contained"
              color="primary"
              className={classes.aktualityButton}
              href={'/aktuality/' + latestAkt[0].id}
            >
              Zobraziť viac
            </Button>
          </div>
          <div style={{ height: '300px' }}>
            <img
              src={latestAkt[0].preview_img.url}
              alt="obrazok"
              width="100%"
              height="400px"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
        <h4>{latestAkt[0].title}</h4>
      </Container>
      <Container style={{ textAlign: 'right', marginBottom: '30px' }}>
        <Button
          target="_blank"
          href="https://fu.tuke.sk/wps/portal/fu/fakulta/aktuality"
          style={{ color: '#000000' }}
        >
          Zobraziť fakultné aktuality
        </Button>
        <Button href="/aktuality/starsie" style={{ color: '#000000' }}>
          Zobraziť staršie
        </Button>
      </Container>
    </Container>
  );
}

export const getStaticProps = async () => {
  const res = await fetch('https://katedra-dizajnu.herokuapp.com/news');
  const data = await res.json();

  return {
    props: { aktuality: data },
  };
};

export default Aktuality
