import {
  Container,
  Breadcrumbs,
  Typography,
  Grid,
  Button,
  Collapse,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ArrowCircleDownSharpIcon from '@mui/icons-material/ArrowCircleDownSharp';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Link from 'next/link';
import sipky from '../public/images/sipky.png';
import Image from 'next/image';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({}));

//-----------------------NASADENIE BACKENDU--------------------------------
export const getStaticProps = async () => {
  const industrialRes = await fetch('https://katedra-dizajnu.herokuapp.com/industrial');
  const industrialData = await industrialRes.json();

  const priestorRes = await fetch('https://katedra-dizajnu.herokuapp.com/priestor');
  const priestorData = await priestorRes.json();

  const inovaciaRes = await fetch('https://katedra-dizajnu.herokuapp.com/inovacia');
  const inovaciaData = await inovaciaRes.json();

  const vKomRes = await fetch('https://katedra-dizajnu.herokuapp.com/v-komunikacia');
  const vKomData = await vKomRes.json();

  const katalogyRes = await fetch('https://katedra-dizajnu.herokuapp.com/katalogies');
  const katalogyData = await katalogyRes.json();

  const oKatedreRes = await fetch('https://katedra-dizajnu.herokuapp.com/o-katedre');
  const oKatedreData = await oKatedreRes.json();

  return {
    props: {
      ind: industrialData,
      priestor: priestorData,
      inov: inovaciaData,
      vKom: vKomData,
      katalogy: katalogyData,
      oKatedre: oKatedreData,
    },
  };
};

export default function index({ oKatedre, ind, priestor, inov, vKom, katalogy }) {
  //-------------------NASTAVENIE EXPAND BUTTONOV-------------------
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [expandedPubAKatalog, setExpandedPubAKatalog] = React.useState(false);

  const handleExpandClickPubAKatalog = () => {
    setExpandedPubAKatalog(!expandedPubAKatalog);
  };

  const [expandedPriestor, setExpandedPriestor] = React.useState(false);

  const handleExpandClickPriestor = () => {
    setExpandedPriestor(!expandedPriestor);
  };
  const [expandedVizKom, setExpandedVizKom] = React.useState(false);

  const handleExpandClickVizKom = () => {
    setExpandedVizKom(!expandedVizKom);
  };
  const [expandedIndustrial, setExpandedIndustrial] = React.useState(false);

  const handleExpandClickIndustrial = () => {
    setExpandedIndustrial(!expandedIndustrial);
  };
  const [expandedInovacia, setExpandedInovacia] = React.useState(false);

  const handleExpandClickInovacia = () => {
    setExpandedInovacia(!expandedInovacia);
  };
  //--------------------------------------------------------------------

  return (
    <div style={{ position: 'relative' }} maxWidth>
      {/* <Container>
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <Typography color="text.primary" fontFamily="Normatica">
            O KATEDRE
          </Typography>
        </Breadcrumbs>
        <h1 style={{ fontWeight: 'normal' }}>Profil katedry Dizajnu FU TUKE</h1>
        <div
          style={{
            marginLeft: '250px',
            marginRight: '249px',
            whiteSpace: 'pre-wrap'
          }}
        >
          <Collapse in={!expanded} timeout="auto" unmountOnExit>
            {oKatedre.text.substring(0, 1392)}...
          </Collapse>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            {oKatedre.text}
          </Collapse>
          <br />
          <div style={{ float: 'right' }}>
            <ExpandMore onClick={handleExpandClick}>
              <Button
                variant="contained"
                color="primary"
                style={{ borderRadius: 20 }}
              >
                Zobraziť viac
              </Button>
            </ExpandMore>
          </div>
        </div>
        <div
          style={{ marginLeft: '100px', marginTop: '100px' }}
          className="katedra"
        >
          <h3>Ateliéry a pedagógovia Katedry dizajnu </h3>
          <Grid container justifyContent="space-between">
            <Grid item xs={6}>
              <h2>
                PRIESTOR
                <ExpandMore onClick={handleExpandClickPriestor}>
                  <IconButton size="large">
                    <ArrowCircleDownSharpIcon
                      fontSize="large"
                      style={{ marginLeft: '24px', color: '#00FF0A' }}
                    />
                  </IconButton>
                </ExpandMore>
              </h2>
              <i className="bi bi-geo-alt-fill" />
              <a target="_blank" href={priestor.link1}>
                <strong> {priestor.miestnost1} </strong>
              </a>
              |
              <a target="_blank" href={priestor.link2}>
                <strong> {priestor.miestnost2}</strong>
              </a>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {priestor.ludia}

                <Collapse in={expandedPriestor} timeout="auto" unmountOnExit>
                  <br />
                  <div style={{ maxWidth: '460px' }}>{priestor.popis}</div>
                </Collapse>
              </div>
              <h2>
                VIZUÁLNA <br />
                KOMUNIKÁCIA
                <ExpandMore onClick={handleExpandClickVizKom}>
                  <IconButton size="large">
                    <ArrowCircleDownSharpIcon
                      fontSize="large"
                      style={{ marginLeft: '24px', color: '#00FF0A' }}
                    />
                  </IconButton>
                </ExpandMore>
              </h2>
              <i className="bi bi-geo-alt-fill" />
              <a target="_blank" href={vKom.link1}>
                <strong> {vKom.miestnost1} </strong>
              </a>
              |
              <a target="_blank" href={vKom.link2}>
                <strong> {vKom.miestnost2}</strong>
              </a>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {vKom.ludia}

                <Collapse in={expandedVizKom} timeout="auto" unmountOnExit>
                  <br />
                  <div style={{ maxWidth: '460px' }}>{vKom.popis}</div>
                </Collapse>
              </div>
            </Grid>
            <Grid item xs={6}>
              <h2>
                INDUSTRIAL
                <ExpandMore onClick={handleExpandClickIndustrial}>
                  <IconButton size="large">
                    <ArrowCircleDownSharpIcon
                      fontSize="large"
                      style={{ marginLeft: '24px', color: '#00FF0A' }}
                    />
                  </IconButton>
                </ExpandMore>
              </h2>
              {/* <RoomOutlinedIcon />
                                <Link href="/katedra">W4 – 205</Link> |
                                <Link href="/katedra"> W4 – 214</Link> 
              <i className="bi bi-geo-alt-fill" />
              <a target="_blank" href={ind.link1}>
                <strong> {ind.miestnost1} </strong>
              </a>
              |
              <a target="_blank" href={ind.link2}>
                <strong> {ind.miestnost2}</strong>
              </a>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {ind.ludia}

                <Collapse in={expandedIndustrial} timeout="auto" unmountOnExit>
                  <br />
                  <div style={{ maxWidth: '460px' }}>{ind.popis}</div>
                </Collapse>
              </div>
              <h2 style={{ marginTop: 100 }}>
                INOVÁCIA
                <ExpandMore onClick={handleExpandClickInovacia}>
                  <IconButton size="large">
                    <ArrowCircleDownSharpIcon
                      fontSize="large"
                      style={{ marginLeft: '24px', color: '#00FF0A' }}
                    />
                  </IconButton>
                </ExpandMore>
              </h2>
              {/* <RoomOutlinedIcon /> 
              <i className="bi bi-geo-alt-fill" />
              <a target="_blank" href={inov.link1}>
                <strong> {inov.miestnost1} </strong>
              </a>
              |
              <a target="_blank" href={inov.link2}>
                <strong> {inov.miestnost2}</strong>
              </a>
              <div style={{ whiteSpace: 'pre-wrap' }}>
                {inov.ludia}
                <Collapse in={expandedInovacia} timeout="auto" unmountOnExit>
                  <br />
                  <div style={{ maxWidth: '460px' }}>
                    {inov.popis}
                    <br />
                  </div>
                </Collapse>
              </div>
            </Grid>
          </Grid>
          <div>
            <h1
              style={{
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontSize: '60px',
                letterSpacing: '-1px',
              }}
            >
              <div>
                Publikácie a katalógy
                <ExpandMore onClick={handleExpandClickPubAKatalog}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ borderRadius: 20, marginLeft: '50px' }}
                  >
                    Zobraziť viac
                  </Button>
                </ExpandMore>
              </div>
            </h1>
          </div>
          <Collapse in={expandedPubAKatalog} timeout="auto" unmountOnExit>
            {/* TODO tu dam este backend katalogy 
            {katalogy.map((katalog) => (
              <a
                target="_blank"
                href={'https://katedra-dizajnu.herokuapp.com' + katalog.pdf.url}
                style={{ textDecoration: 'underline' }}
              >
                <h5>{katalog.title}</h5>
              </a>
            ))}
          </Collapse>
        </div>
      </Container>
      <div
        style={{
          position: 'absolute',
          width: '788px',
          height: '311px',
          left: '0px',
          top: '450px',
          backgroundColor: '#00FF0A',
          zIndex: -1,
        }}
      ></div>
      <div style={{ position: 'absolute', bottom: 0, right: 465, zIndex: -1 }}>
        <Image src={sipky} height="180px" width="300px" alt="backgroundimg" />
      </div> */}
    </div>
  );
}
