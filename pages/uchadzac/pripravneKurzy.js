import { Button, Container, Grid, Box, Dialog } from '@material-ui/core';
import { Breadcrumbs, Fab } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import sipky from '../../public/images/sipky.png';
import Image from 'next/image';
// import foto from '../../../public/images/uchadzac.png';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: '#add8e6',
        }}
      >
        <Fab
          size="small"
          color="info"
          aria-label="add"
          style={{ position: 'absolute', bottom: 130, left: 0 }}
        >
          <ArrowBackIosIcon />
        </Fab>
        <Fab
          size="small"
          color="info"
          aria-label="add"
          style={{ position: 'absolute', bottom: 130, right: 0 }}
        >
          <ArrowForwardIosIcon />
        </Fab>
      </Box>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

// TODO: tu upravit tie mly bo su zbytocne
export default function PripravneKurzy({ pKurz }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <Container>
      <Container maxWidth>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator=">"
          className="breadcrumbs"
        >
          <Link underline="hover" color="inherit" href="../spolupracuj">
            Štúdium
          </Link>
          <Link underline="hover" color="inherit" href="/uchadzac">
            Uchádzač
          </Link>
          <Typography color="text.primary">Prípravné kurzy</Typography>
        </Breadcrumbs>
        <h1>Prípravné kurzy</h1>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={5}>
            <h5>
              Katedra dizajnu Fakulty umení Technickej univerzity v Košiciach
              pozýva záujemcov na Prípravný kurz kresby a dizajnu. Kurz je
              zameraný na rozvoj kresliarskej zručnosti, výtvarnej kompozície,
              estetického cítenia a navrhovania dizajnu produktov.
            </h5>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              spacing={1}
            >
              {/* TODO zvacsit zatvorky bo su barz male */}
              <Grid item xs={1}>
                <img src="/zatvorkaV.png" />
              </Grid>
              <Grid item xs={9}>
                <h4>
                  Kurz je predbežne plánovaný v termíne od {pKurz.od} do{' '}
                  {pKurz.do}.
                </h4>
                <p style={{ fontSize: '12px' }}>
                  Vzhľadom na aktuálnu situáciu vás o zmenách budeme vopred
                  informovať.
                </p>
              </Grid>
              <Grid item xs={1}>
                <img src="/zatvorkaV2.png" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <h3>Miesto a čas konania</h3>
        <p>
          <img src="/sipocka.png" /> {pKurz.miesto}
        </p>
        <p>
          <img src="/sipocka.png" /> {pKurz.cas}
        </p>

        <h3>Cena kurzu</h3>
        <p>
          <img src="/sipocka.png" /> {pKurz.cena},–€
        </p>
        <p>
          <img src="/sipocka.png" /> celkový rozsah - 30 hodín
        </p>
        <p>
          <img src="/sipocka.png" /> pri neúčasti na prípravnom kurze sa
          poplatok nevracia.
        </p>

        <h3>Odborný garant</h3>
        <p>
          <img src="/sipocka.png" /> doc. Mgr. art. Andrej Haščák, ArtD
        </p>

        <h3>Informácie o prihláške na kurz</h3>
        {/* <Grid 
                 container
                 direction="row"
                 justifyContent="space-around"
                 spacing={2}>
                    <Grid item sx={4}>
                        <p>Technická univerzita v Košiciach<br /> Fakulta umení<br /> Katedra dizajnu<br /> Watsonova 4<br /> 042 00 Košice - Sever </p>
                        <p>tel.:+ 421 55 602 2247, 55 602 2177 <br />e-mail: kd.fu@tuke.sk</p>
                    </Grid>
                    <Grid item sx={10}></Grid>
                </Grid> */}
        <Container>
          <p>
            Technická univerzita v Košiciach
            <br /> Fakulta umení
            <br /> Katedra dizajnu
            <br /> Watsonova 4<br /> 042 00 Košice - Sever{' '}
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> tel.:+ 421 55 602 2247, 55
            602 2177 <br />
            <i className="bi bi-envelope"></i> e-mail: kd.fu@tuke.sk
          </p>
        </Container>
        {/* <h1>Fotogaléria z kurzu</h1> */}
        {/* TODO dialog popup */}
        {/* <Button
                    variant="contained"
                    color="primary">Zobraziť viac</Button> */}
        <div style={{ position: 'relative' }}>
          <Typography variant="subtitle1" component="div">
            <h1
              style={{
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontSize: '60px',
                letterSpacing: '-1px',
              }}
            >
              Fotogaléria z kurzu
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
                style={{ borderRadius: 20, marginLeft: '27px' }}
              >
                zobrazit viac
              </Button>
            </h1>
          </Typography>

          <SimpleDialog
            selectedValue={selectedValue}
            open={open}
            onClose={handleClose}
          />
          <div style={{ position: 'absolute', top: -80, left: 435 }}>
            <Image
              src={sipky}
              height="180px"
              width="300px"
              alt="backgroundimg"
            />
          </div>
        </div>
      </Container>
    </Container>
  );
}

export async function getStaticProps() {
  const pKurzRes = await axios.get('http://localhost:1337/p-kurz');

  return {
    props: {
      pKurz: pKurzRes.data,
    },
  };
}
