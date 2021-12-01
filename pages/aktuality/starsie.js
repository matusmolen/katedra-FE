import {
  Container,
  Grid,
  Button,
  Breadcrumbs,
  Link,
  Typography,
} from '@mui/material';
import React from 'react';
import useStyles from '../../utils/styles';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:1337/news');
  const data = await res.json();

  return {
    props: { aktuality: data },
  };
};

export default function starsieAktuality({ aktuality }) {
  const classes = useStyles();
  const pocetAktualit = aktuality.length;
  const poslednyIndex = pocetAktualit - 1;

  const posledna = aktuality[poslednyIndex];
  const ostatne = aktuality.slice(0, pocetAktualit - 1);
  var parnyPocet;

  {
    pocetAktualit % 2 == 0 ? (parnyPocet = true) : (parnyPocet = false);
  }

  return (
    <>
      <Container>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link underline="hover" color="inherit" href="../aktuality">
            Aktuality
          </Link>
          <Typography color="text.primary">Staršie aktuality</Typography>
        </Breadcrumbs>
        <Container>
          <h2>Staršie aktuality</h2>

          {parnyPocet ? (
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={4}
            >
              {aktuality.map((aktualita) => (
                <Grid item xs={6} key={aktualita.id}>
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
                        className={classes.aktualityButton}
                        variant="contained"
                        color="primary"
                        // style={{ borderRadius: 15 }}
                        href={'/aktuality/' + aktualita.id}
                      >
                        Zobraziť viac
                      </Button>
                    </div>
                    <img
                      src={'http://localhost:1337' + aktualita.preview_img.url}
                      alt="obrazok"
                      height="270"
                      width="550"
                    />
                  </div>
                  <h4>{aktualita.title}</h4>
                </Grid>
              ))}
            </Grid>
          ) : (
            <>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={4}
              >
                {ostatne.map((aktualita) => (
                  <Grid item xs={6} key={aktualita.id}>
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
                          className={classes.aktualityButton}
                          variant="contained"
                          color="primary"
                          // style={{ borderRadius: 15 }}
                          href={'/aktuality/' + aktualita.id}
                        >
                          Zobraziť viac
                        </Button>
                      </div>
                      <img
                        src={
                          'http://localhost:1337' + aktualita.preview_img.url
                        }
                        alt="obrazok"
                        height="270"
                        width="100%"
                      />
                    </div>
                    <h4>{aktualita.title}</h4>
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
                        className={classes.aktualityButton}
                        variant="contained"
                        color="primary"
                        href={'/aktuality/' + posledna.id}
                      >
                        Zobraziť viac
                      </Button>
                    </div>
                    <img
                      src={'http://localhost:1337' + posledna.preview_img.url}
                      alt="obrazok"
                      height="270"
                      width="100%"
                    />
                  </div>
                  <h4>{posledna.title}</h4>
                </Grid>
              </Grid>
            </>
          )}
        </Container>
        <Container style={{ textAlign: 'right', marginBottom: '30px' }}>
          <Button
            target="_blank"
            href="https://fu.tuke.sk/wps/portal/fu/fakulta/aktuality"
            style={{ color: '#000000' }}
          >
            Zobraziť fakultné aktuality
          </Button>
          <Button href="/aktuality" style={{ color: '#000000' }}>
            späť
          </Button>
        </Container>
      </Container>
    </>
  );
}
