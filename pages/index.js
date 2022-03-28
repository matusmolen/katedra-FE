import * as React from 'react';
import {Box, Button, Container} from '@mui/material';
import AppLink from "../utils/AppLink";

export async function getStaticProps() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/landing-page');
    const data = await res.json();

    return {
        props: {lPage: data},
        revalidate: 60
    };
}

export default function Uvod({lPage}) {
    return (
        lPage ?
            <Box sx={{minHeight:'90vh', display: 'flex', alignItems:'center'}}>
                <Container>
                    <h1>
                        {lPage.title}
                    </h1>

                    <h5 style={{marginTop: '-1em'}}>
                        {lPage.subtitle}
                    </h5>

                    {lPage.tlacidlo_odkaz &&
                        <AppLink href={lPage.tlacidlo_odkaz} underline='none'>
                            <Button
                                variant="contained"
                                style={{
                                    borderRadius: 20,
                                    width: '192px',
                                    backgroundColor: '#000000',
                                    color: '#ffffff',
                                }}
                            >
                                Zobraziť
                            </Button>
                        </AppLink>
                    }

                </Container>
                <div className="video-container">
                    <video autoPlay muted loop playsInline controls={false}>
                        <source
                            src={lPage.video.url}
                            type={lPage.video.mime}
                        />
                    </video>
                </div>
            </Box>
        :
            <div/>
    );
}
