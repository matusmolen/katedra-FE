import {Box, Breadcrumbs, Container, Grid, Typography} from '@mui/material';
import axios from 'axios';
import AppLink from "../../utils/AppLink";

function Vykricnik() {
    return (<img src="/vykricnik.png" alt='vykricnik' style={{marginRight:'1em'}}/>)
}

export default function PrijmacieKonanie({prihlasky}) {
    return (
        <Container sx={{position: 'relative'}}>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <AppLink underline="hover" color="inherit" href="/spolupracuj">
                    Štúdium
                </AppLink>
                <AppLink underline="hover" color="inherit" href="/uchadzac">
                    Uchádzač
                </AppLink>
                <Typography>Prijímacie konanie</Typography>
            </Breadcrumbs>
            <h1>Prijímacie konanie</h1>
            <Grid container spacing={2}>
                <Grid item sm={12} md={6}>
                    <a
                        href="https://fu.tuke.sk/wps/portal/fu/uchadzaci/prijimacie-konanie"
                        target="_blank"
                    >
                        <h3>I. stupeň štúdia (Bc.)</h3>
                    </a>
                </Grid>
                <Grid item sm={12} md={6} className='terminy' display='flex' flexDirection='row' alignItems='center'>
                    <Vykricnik/>
                    <strong>
                        Termín podania prihlášky na I. stupeň štúdia: <br/>
                        do {prihlasky.bc}
                    </strong>
                </Grid>
                <Grid item sm={12} md={6}>
                    <a
                        href="https://fu.tuke.sk/wps/portal/fu/uchadzaci/prijimacie-konanie"
                        target="_blank"
                    >
                        <h3>II. stupeň štúdia (Mgr art.)</h3>
                    </a>
                </Grid>
                <Grid item sm={12} md={6} className='terminy' display='flex' flexDirection='row' alignItems='center'>
                    <Vykricnik/>
                    <strong>
                        Termín podania prihlášky na II. stupeň štúdia: <br/>
                        do {prihlasky.mgr}
                    </strong>
                </Grid>
                <Grid item sm={12} md={6}>
                    <a
                        href="https://fu.tuke.sk/wps/portal/fu/uchadzaci/prijimacie-konanie"
                        target="_blank"
                    >
                        <h3>III. stupeň štúdia (ArtD.)</h3>
                    </a>
                </Grid>
                <Grid item sm={12} md={6} className='terminy' display='flex' flexDirection='row' alignItems='center'>
                    <Vykricnik/>
                    <strong>
                        Termín podania prihlášky na III. stupeň štúdia: <br/>
                        do {prihlasky.artD}
                    </strong>
                </Grid>
            </Grid>

            <Grid container direction="row" spacing={2} mt={2}>
                <Grid item md={6}>
                    <h3>Profil absolventa (Bc.)</h3>
                    <p>
                        Absolvent bakalárskeho štúdia dizajnu je samostatná tvorivá
                        osobnosť, ktorá vo svojom profile zahŕňa poznatky z umenia, vedy a
                        techniky. Na to, aby študent dosiahol požadované vedomosti a
                        zručnosti v odbore, musí prvý ročník štúdia venovať základom
                        ateliérovej tvorby, kde sa začína profilovať ako dizajnér a tiež
                        ako výtvarník (absolvuje predmety Základy dizajnu, Kresba pre
                        dizajn, Tvarovanie, Výtvarná geometria, neskôr Farba a Písmo).
                        Ťažisko bakalárskeho štúdia na Katedre dizajnu je zamerané na
                        postupnú realizáciu zadaní v štyroch profilujúcich ateliéroch
                        dizajnu: 1. Industrial, 2. Inovácia, 3. Priestor, 4. Vizuálna
                        komunikácia. V zostávajúcich troch semestroch sa študent zdokonalí
                        v profilujúcom ateliéri, ktorý si na záver piateho semestra sám
                        zvolil. Na realizáciu bakalárskej práce majú študenti k dispozícii
                        posledný semester štúdia. Komplexnosť bakalárskeho štúdia dizajnu
                        je zabezpečená rôznorodosťou tém a zadaní, ktoré študent absolvuje
                        v ateliéroch na Katedre dizajnu.
                    </p>
                </Grid>
                <Grid item md={6}>
                    <h3>Profil absolventa (Mgr art.)</h3>
                    <p>
                        Absolvent magisterského štúdia dizajnu je samostatná tvorivá
                        osobnosť, ktorá vo svojom profile zahŕňa poznatky z umenia,
                        dizajnu, vedy a techniky. Študenti druhého stupňa v zvolenom
                        profilujúcom ateliéri pod názvom Štúdio dizajnu: 1. Industrial, 2.
                        Inovácia, 3. Priestor, resp. 4. Vizuálna komunikácia, riešia
                        náročnejšie projekty alebo koncepty, ktoré sa realizujú aj v
                        spolupráci s výrobnými podnikmi alebo spoločenskými inštitúciami.
                        Môžu to byť aj dizajnérske koncepty, ktoré posúvajú hranice
                        odboru. Na spracovanie diplomovej práce majú študenti celý druhý
                        ročník štúdia. To predpokladá, že projekt bude podporený aj
                        dizajnérskym výskumom, ktorý je zdokumentovaný v teoretickej časti
                        diplomovej práce. Na prípravu projektu slúžia aj podporné predmety
                        ako Dejiny dizajnu, Súčasná estetika, Súčasný dizajn, architektúra
                        a výtvarné umenie, Metodológia záverečnej práce
                    </p>
                    <br/>
                    <h3>Profil absolventa (ArtD.)</h3>
                    <p>
                        Absolvent tretieho stupňa študijného odboru dizajn je samostatná
                        tvorivá osobnosť, ktorá vo svojom profile zahŕňa poznatky z
                        umenia, vedy a techniky, má za sebou dizajnérsky výskum v oblasti
                        odboru, v ktorej vie odbornými textami reflektovať súčasný vývoj
                        dizajnu. Počas štúdia doktorand spolupôsobí pri plnení vedeckých a
                        pedagogických úloh Katedry dizajnu. Okrem toho vykazuje umeleckú
                        činnosť, pracuje na dizajnérskych projektoch, publikuje, skúma
                        poznatky z oblasti svojho výskumu a podieľa sa na rozvoji katedry.
                    </p>
                    <br/>
                </Grid>
            </Grid>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '8em',
                    height: '40em',
                    width: '50%',
                    left: '-145px',
                    backgroundColor: '#00FF0A',
                    zIndex: -1,
                }}
            />
        </Container>
    );
}

export async function getStaticProps() {
    const prihlaskyRes = await axios.get(
        'https://katedra-dizajnu.herokuapp.com/termin-prihlasok'
    );

    return {
        props: {
            prihlasky: prihlaskyRes.data,
        },
        revalidate: 60
    };
}
