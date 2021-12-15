import {
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Grid,
} from '@material-ui/core';
import React from 'react';
import program_prestal_pracovat from '../../public/images/program_prestal_pracovat.png';
import Image from 'next/image';


import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const getStaticProps = async () => {
  const res = await fetch('https://katedra-dizajnu.herokuapp.com/works');
  const data = await res.json();

  return {
      props: { works: data }
  }
}

export default function praca_staze_sutaze({ works }) {


  return (
    <Container>
      <Container>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Link underline="hover" color="inherit" href="../studium">
            Štúdium
          </Link>
          <Link underline="hover" color="inherit" href="../studium">
            Študent
          </Link>
          <Typography color="primary">Práca, stáže, súťaže</Typography>
        </Breadcrumbs>
        <Grid container justifyContent="space-evenly">
          <Grid item xs={6}>
            <h1>
              Práca, stáže,
              <br />
              súťaže
            </h1>
            <h5>
              Pozri si prehľad príležitostí. Či už je to možnosť zapojiť sa do
              súťaže, alebo si privyrobiť a zároveň zbierať skúsenosti z odboru.
              Ponuky sú vždy čerstvé a pravidelne aktualizované.
            </h5>
          </Grid>
          <Grid item xs={6} style={{ marginTop: 210 }}>
            <Image
              src={program_prestal_pracovat}
              alt="program prestal pracovať"
            />
          </Grid>
        </Grid>
      </Container>

      <Container>
        <div>
          <h3>Aktuálna ponuka príležitostí</h3>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
           {works.map(work => (
                <Grid item xs={6} key={work.id}>
                    <Stack direction="row" spacing={1}>
                        <Chip
                            label={work.oddelenie}
                            variant="outlined"
                            style={{ color: '#00ff0a', borderColor: '#00ff0a' }}
                        />
                        <Chip
                            label={work.cinnost}
                            variant="outlined"
                            style={{ color: '#00ff0a', borderColor: '#00ff0a' }}
                            d
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
        </div>
      </Container>
    </Container>
  );
}

