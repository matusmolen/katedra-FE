import * as React from 'react';
import axios from 'axios';
import { Button, Collapse, IconButton, makeStyles } from '@material-ui/core';
import { styled } from '@mui/material/styles';

export async function getStaticProps() {
  const res = await fetch('https://katedra-dizajnu.herokuapp.com/landing-page');
  const data = await res.json();

  return {
    props: { lPage: data },
  };
}

const useStyles = makeStyles({
  text: {
    position: 'absolute',
    zIndex: 1,
    top: '256px',
    left: '198px',
    fontFamily: 'Technik-200',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '140px',
    // lineHeight: '184px',
    // display: 'flex',
    alignItems: 'center',
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({}));

export default function Uvod({ lPage }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();

  return (
    <>
    {lPage ? (
      <div maxWidth position="relative">
        <div className="video-container">
          <video autoPlay muted loop>
            <source
              src={'https://katedra-dizajnu.herokuapp.com' + lPage.video.url}
              // src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              // src="https://katedra-dizajnu.herokuapp.com/uploads/LP_video_df3bfef76d.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={classes.text}>
          <h1>
            {lPage.zber} <br />
            katedry Dizajnu
          </h1>
          <br />
          <h5 style={{ marginTop: -80 }}>
            Pozývame Vás na prehliadku <br /> semestrálnych prác Katedry dizajnu
          </h5>
          <Collapse in={!expanded} timeout="auto" unmountOnExit>
            <Button
              variant="contained"
              href="/galeria"
              style={{
                borderRadius: 20,
                width: '192px',
                backgroundColor: '#000000',
                color: '#ffffff',
              }}
            >
              Zobraziť
            </Button>
          </Collapse>
        </div>
      </div>
      ) : (
        <div></div>
      )}  
    </>
  );
}
