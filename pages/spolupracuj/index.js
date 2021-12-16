import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Container,
  Grid,
} from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import KontaktnyFormular from '../../components/KontaktnyFormular';
import Image from 'next/image';
import obrazok from '../../img/Spolupraca_1-01.png';
import sipky from '../../public/images/sipky.png';

export const getStaticProps = async () => {
  const res = await fetch('https://katedra-dizajnu.herokuapp.com/coops');
  const data = await res.json();

  return {
    props: { spoluprace: data },
  };
};

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({}));

export default function Spoluprace({ spoluprace }) {
  // console.log(spoluprace)

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container postion="relative">
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <h1>Pripravení na spoluprácu?</h1>
            <p>
              Katedra dizajnu si zakladá na kooperovaní s inštitúciami a
              spoločnosťami. Spolupráca s praxou pomáha katedre napredovať a
              zároveň študentom rozvíjať sa. Pozri si ochutnávku z našich
              vydarených spoluprác.
            </p>
          </Grid>
          <Grid item xs={6}>
            <Image src={obrazok} alt="spolupraca" />
          </Grid>
        </Grid>
      </Container>
      <br />
      <Card elevation={0}>
        <CardContent>
          <CardActions>
            <h2>Vydarené projekty</h2>{' '}
            <ExpandMore
              // expand={expanded}
              onClick={handleExpandClick}
              // aria-expanded={expanded}
              // aria-label="show more">
            >
              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: 20 }}
              >
                Zobraziť viac
              </Button>
            </ExpandMore>
          </CardActions>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid
              container
              direction="row"
              //justifyContent="space-around"   //spravi to ze tretia spolupraca bude v strede
              justifyContent="space-between"
              alignItems="flex-start"
              spacing={5}
            >
              {spoluprace.map((spolupraca) => (
                <Grid item xs={6} key={spolupraca.id}>
                  <h3>{spolupraca.title}</h3>
                  <p>{spolupraca.description}</p>
                  <Button
                    variant="contained"
                    href={'/spolupracuj/' + spolupraca.id}
                    key={spolupraca.id}
                    style={{
                      borderRadius: 20,
                      backgroundColor: '#000000',
                      color: '#ffffff',
                    }}
                  >
                    Zobraziť viac
                  </Button>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
      <br />
      <Container style={{ marginBottom: '30px' }}>
        <h2>Kontaktný formulár</h2>
        <KontaktnyFormular />
      </Container>
      <div style={{ position: 'absolute', bottom: 0, left: 440 }}>
        <Image src={sipky} height="180px" width="320px" alt="backgroundimg" />
      </div>
    </Container>
  );
}
