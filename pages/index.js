import * as React from 'react';
import {Button, Container} from '@mui/material';

export async function getStaticProps() {
    const res = await fetch('https://katedra-dizajnu.herokuapp.com/landing-page');
    const data = await res.json();

    return {
        props: {lPage: data},
    };
}

export default function Uvod({lPage}) {
    return (
        <>
            {lPage ? (
                <>
                    <Container sx={{paddingBottom: '5em'}}>
                        <h1>
                            {lPage.zber} <br/>
                            katedry Dizajnu
                        </h1>
                        <h5 style={{marginTop: '-1em'}}>
                            Pozývame Vás na prehliadku <br/> semestrálnych prác Katedry dizajnu
                        </h5>

                        {lPage.tlacidlo_odkaz &&
                            <Button
                                variant="contained"
                                href={lPage.tlacidlo_odkaz}
                                style={{
                                    borderRadius: 20,
                                    width: '192px',
                                    backgroundColor: '#000000',
                                    color: '#ffffff',
                                }}
                            >
                                Zobraziť
                            </Button>
                        }

                    </Container>
                    <div className="video-container">
                        <video autoPlay muted loop>
                            <source
                                src={lPage.video.url}
                                // src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                                // src="https://katedra-dizajnu.herokuapp.com/uploads/LP_video_df3bfef76d.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </div>
                </>
            ) : (
                <div></div>
            )}
        </>
    );
}
