import {Box, Breadcrumbs, Button, CardContent, Collapse, Container, Grid, Typography,} from '@mui/material';

import * as React from 'react';
import KontaktnyFormular from '../../components/KontaktnyFormular';
import AppLink from "../../utils/AppLink";

export const getStaticProps = async () => {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/coops');
    const data = await res.json();

    return {
        props: {spoluprace: data},
        revalidate: 60
    };
};


export default function Spoluprace({spoluprace}) {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Typography>Spolupráca</Typography>
            </Breadcrumbs>

            <Grid container spacing={2}>
                <Grid item md={6}>
                    <h1>Pripravení na spoluprácu?</h1>
                    <p>
                        Katedra dizajnu si zakladá na kooperovaní s inštitúciami a
                        spoločnosťami. Spolupráca s praxou pomáha katedre napredovať a
                        zároveň študentom rozvíjať sa. Pozri si ochutnávku z našich
                        vydarených spoluprác.
                    </p>
                </Grid>
                <Grid item md={6} sx={{position: 'relative'}} display={{sm: 'none', md: 'block'}}>
                    <img src={'/images/Spolupraca_1-01.png'} className='image-contain' alt="spolupraca"/>
                </Grid>
            </Grid>


            <Box>
                <h2>
                    Vydarené projekty
                    <Button
                        variant="contained"
                        color="primary"
                        style={{borderRadius: 20, marginLeft: '50px'}}
                        onClick={() => setExpanded(!expanded)}
                    >
                        Zobraziť {expanded ? 'menej' : 'viac'}
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
                            <img src={'/images/sipky.png'} alt="backgroundimg" className='image-contain'/>
                        </Box>
                    </Button>
                </h2>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid
                            container
                            spacing={2}
                        >
                            {spoluprace.map((spolupraca) => (
                                <Grid item md={6} key={spolupraca.id}>
                                    <h3>{spolupraca.title}</h3>
                                    <p>{spolupraca.description}</p>
                                    <AppLink href={`/spolupracuj/${spolupraca.id}`} underline='none'>
                                        <Button
                                            variant="contained"
                                            key={spolupraca.id}
                                            style={{
                                                borderRadius: 20,
                                                backgroundColor: '#000000',
                                                color: '#ffffff',
                                            }}
                                        >
                                            Zobraziť viac
                                        </Button>
                                    </AppLink>
                                </Grid>
                            ))}
                        </Grid>
                    </CardContent>
                </Collapse>
            </Box>
            <br/>

            <h2>Kontaktný formulár</h2>
            <KontaktnyFormular/>

        </Container>
    );
}
