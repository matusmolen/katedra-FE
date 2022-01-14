import {Breadcrumbs, Button, Container, Grid, Typography, useMediaQuery} from '@mui/material';
import Image from 'next/image';
import AppLink from "../../utils/AppLink";
import theme from "../../styles/theme";

export default function Uchadzac() {
    const largeScreen = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Container
            sx={{
                backgroundImage: largeScreen ? 'url(/images/uchadzac_1-01.png)' : '',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: '30px',
                backgroundPositionY: '200px',
            }}
        >
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <AppLink underline="hover" color="inherit" href="../studium">
                    Štúdium
                </AppLink>
                <Typography>Uchádzač</Typography>
            </Breadcrumbs>

                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        spacing={2}
                    >
                        <Grid item lg={5}>
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


                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        spacing={2}
                    >
                        <Grid item md={5}>
                            <div
                                style={{position: 'relative', height: '100%'}}
                            >
                                <Image
                                    src='/images/uchadzac_2-01.png'
                                    alt="plechovka"
                                    layout="fill"
                                    objectFit='contain'
                                />
                            </div>
                        </Grid>
                        <Grid item md={6}>
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
                <Container className="down" maxWidth="sm">
                    <h1>Úspešní absolventi</h1>
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
        </Container>
    );
}
