import {Box, Breadcrumbs, Button, Collapse, Container, Grid, Typography} from '@mui/material';
import React from 'react';
import {styled} from '@mui/material/styles';
import Image from 'next/image';
import Room from "../components/room/Room";

const GreenBox = styled('div')(({theme}) => ({
    position: 'absolute',
    top: '12em',
    left: '-145px',
    height: '20em',
    width: '70%',
    backgroundColor: theme.palette.primary.main,
    zIndex: -1,
}));


//-----------------------NASADENIE BACKENDU--------------------------------
export const getStaticProps = async () => {
    const rooms = [
        {
            nazov: 'PRIESTOR',
            ...(await (await fetch('https://katedra-dizajnu.herokuapp.com/priestor')).json())
        },
        {
            nazov: 'INDUSTRIAL',
            ...(await (await fetch('https://katedra-dizajnu.herokuapp.com/industrial')).json())
        },
        {
            nazov: 'VIZUÁLNA\nKOMUNIKÁCIA',
            ...(await (await fetch('https://katedra-dizajnu.herokuapp.com/v-komunikacia')).json())
        },
        {
            nazov: 'INOVÁCIA',
            ...(await (await fetch('https://katedra-dizajnu.herokuapp.com/inovacia')).json())
        },
    ]

    const katalogyRes = await fetch('https://katedra-dizajnu.herokuapp.com/katalogies');
    const katalogyData = await katalogyRes.json();

    const oKatedreRes = await fetch('https://katedra-dizajnu.herokuapp.com/o-katedre');
    const oKatedreData = await oKatedreRes.json();

    return {
        props: {
            rooms,
            katalogy: katalogyData,
            oKatedre: oKatedreData,
        },
        revalidate: 60
    };
};

export default function index({oKatedre, rooms, katalogy}) {
    //-------------------NASTAVENIE EXPAND BUTTONOV-------------------
    const [expanded, setExpanded] = React.useState(false);
    const [expandedPubAKatalog, setExpandedPubAKatalog] = React.useState(false);


    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Typography>
                    O katedre
                </Typography>
            </Breadcrumbs>
            <h1 style={{fontWeight: 'normal'}}>Profil katedry Dizajnu FU TUKE</h1>
            <Box
                px={{sx: 1, md: 16}}
                sx={{
                    position: 'relative',
                    whiteSpace: 'pre-wrap'
                }}
            >
                <p>{expanded ? oKatedre.text : `${oKatedre.text.substring(0, 1348)}...`}</p>
                <Button
                    variant="contained"
                    color="primary"
                    style={{borderRadius: 20, marginLeft: 'auto', display: 'flex'}}
                    onClick={() => setExpanded(!expanded)}
                >
                    Zobraziť {expanded ? 'menej' : 'viac'}
                </Button>
                <GreenBox sx={{display: {xs: 'none', md: 'block'}}}/>
            </Box>
            <div
                style={{marginTop: '100px'}}
                className="katedra"
            >
                <h3>Ateliéry a pedagógovia Katedry dizajnu </h3>
                <Grid container justifyContent="space-between" direction='row' columnSpacing={12} rowSpacing={4}>
                    {rooms.map((room, key) => <Room key={key} room={room}/>)}
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
                            <Button
                                variant="contained"
                                color="primary"
                                style={{borderRadius: 20, marginLeft: '50px'}}
                                onClick={() => setExpandedPubAKatalog(!expandedPubAKatalog)}
                            >
                                Zobraziť {expandedPubAKatalog ? 'menej' : 'viac'}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        width: '300px',
                                        height: '180px',
                                        bottom: '-50px',
                                        left: '-90px',
                                    }}
                                    display={{
                                        xs: 'none',
                                        sm: 'none',
                                        md: 'block'
                                    }}
                                >
                                    <Image src='/images/sipky.png' alt="backgroundimg" layout='fill' objectFit='contain'/>
                                </Box>
                            </Button>
                        </div>
                    </h1>
                </div>
                <Collapse in={expandedPubAKatalog} timeout="auto" unmountOnExit>
                    {katalogy.map((katalog, index) => (
                        <a
                            target="_blank"
                            href={katalog.pdf ? katalog.pdf.url : '#'}
                            style={{textDecoration: 'underline'}}
                            key={index}
                        >
                            <h5>{katalog.title}</h5>
                        </a>
                    ))}
                </Collapse>
            </div>
        </Container>
    );
}
