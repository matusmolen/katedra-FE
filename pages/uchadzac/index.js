import { Button, Container, Grid } from '@material-ui/core';
import { Breadcrumbs } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import plechovka from '../../img/uchadzac_2-01.png';
import pozadie from '../../img/uchadzac_1-01.jpg';
import Image from 'next/image';
import useStyles from '../../utils/styles';
import ruka from '../../public/images/uchadzac.png';

export default function Uchadzac() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link underline="hover" color="inherit" href="../studium">
            Štúdium
          </Link>
          <Typography color="primary">Uchádzač</Typography>
        </Breadcrumbs>
      </Container>
      {/* TODO obrazok do pozadia */}
      <div style={{ position: 'relative' }}>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            spacing={2}
          >
            <Grid item xs={5}>
              <h1>Príjímacie konanie</h1>
              <h5>
                Všetko čo potrebuješ vedieť skôr, ako si podáš prihlášku na
                štúdium. Či už ide o I., II., alebo III. stupeň, v tejto sekcii
                nájdeš všetky potrebné informácie. Dozvieš sa ako prebieha
                vyučovanie. Navyše tu nájdeš aj profil absolventa ku každému
                stupňu štúdia.
              </h5>
              <Button
                variant="contained"
                href="/uchadzac/prijimacieKonanie"
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  borderRadius: 20,
                }}
              >
                Zobraziť viac
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            spacing={2}
          >
            <Grid item xs={5}>
              <div
                style={{ position: 'relative', width: '25vw', height: '38vw' }}
              >
                <Image src={plechovka} alt="plechovka" layout="fill" />
              </div>
            </Grid>
            <Grid item xs={5}>
              <h1>Prípravné kurzy</h1>
              <h5>
                Chystáš sa na prijímačky na dizajn? V tom prípade je Prípravný
                kurz kresby presnie pre teba. Počas štyroch víkendov sa
                intenzívne venuješ zadaniam, ktoré ťa pripravia na prijímacie
                skúšky. Kurz pokrýva všetko od kresby figúry a zátišia až po 3D
                navrhovanie a grafické cvičenia. Prihlás sa a zvýš svoje šance
                na prijatie.
              </h5>
              {/* <Button variant="contained" color="info" href="/uchadzac/pripravneKurzy">Zobraziť viac</Button> */}
              <Button
                variant="contained"
                href="/uchadzac/pripravneKurzy"
                style={{
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  borderRadius: 20,
                }}
              >
                Zobraziť viac
              </Button>
            </Grid>
          </Grid>
        </Container>
        <Container className="down" maxWidth="sm">
          <h1>Úspešní absolventi</h1>
          {/* <br /> */}
          <h5>
            Určite si aj ty počul mýtus: „Dizajnom sa nedá uživiť.“ Ak si ešte
            stále na vážkach, pozri si príbehy našich absolventov, ktorí tento
            mýtus vyvrátili. Ich práce sa tešia profesionálnemu uznaniu aj
            ohodnoteniu. Inšpiruj sa. Raz sa medzi nich môžeš zaradiť aj ty.
          </h5>
          <Button
            variant="contained"
            href="/uchadzac/uspesni_absolventi"
            style={{
              backgroundColor: '#000000',
              color: '#ffffff',
              borderRadius: 20,
              marginBottom: '30px',
            }}
          >
            Zobraziť viac
          </Button>
        </Container>
        {/* <div style={{ position: 'absolute', zIndex: -1, top: 60 }}>
          <Image src={ruka} alt="ruka" />
        </div> */}
      </div>
    </>
  );
}
