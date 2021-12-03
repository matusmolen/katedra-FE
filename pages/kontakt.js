import { Container, Link } from "@material-ui/core";
import { Grid } from '@material-ui/core';
import Image from 'next/image';
import mapka from '../img/Kontakt_2-01.png';
import obrazok from '../img/Kontakt_1-01.png'
import KontaktnyFormular from '../components/KontaktnyFormular';
import axios from "axios";

export async function getStaticProps() {
    const kontaktyRes = await axios.get("https://katedra-dizajnu.herokuapp.com/kontakt-pages");

    return {
        props: {
            kontakty: kontaktyRes.data
        },
    }
}

export default function KontaktPage({ kontakty }) {
    return <>
        {/* <Container maxWidth className="right"> */}
        <Container maxWidth className="kontakt right">
            <Grid
                container
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={2}>
                <Grid item xs={4}>
                    <h1>Kde nás nájdete?</h1>
                    <p>Watsonova 4, <br /> 040 20 Kosice - Sever</p>

                    <h3>{kontakty[3].name}</h3>
                    <p>
                        <i className="bi bi-geo-alt-fill" />
                        <Link target="_blank" href={kontakty[3].link_miestnosti}>
                            <strong> {kontakty[3].miestnost}</strong>
                        </Link>
                        <br />
                        sekretariat: Watsonova 4, 2.poschodie <br />
                        {kontakty[3].zastupca}<br />
                        E-mail: <a href={"mailto:" + kontakty[3].email}>{kontakty[3].email}</a>
                    </p>

                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={6} >
                    <Image
                        src={mapka}
                        alt="mapka"
                    />
                </Grid>
            </Grid>
        </Container>
        {/* </Container> */}

        <Container className="kontakt" maxWidth>
            <Container maxWidth style={{marginBottom: 30}}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"

                >
                    <Grid item sm={4}>
                        <h3>{kontakty[0].name}</h3>
                        <p>
                            <i className="bi bi-geo-alt-fill" />
                            <Link target="_blank" href={kontakty[0].link_miestnosti}>
                                <strong> {kontakty[0].miestnost}</strong>
                            </Link> 
                            | 
                            <Link target="_blank" href={kontakty[0].link_miestnosti2}>
                                <strong> {kontakty[0].miestnost2}</strong>
                            </Link>
                            <br />
                            {kontakty[0].zastupca}<br />
                            Tel. {kontakty[0].tel}<br />
                            E-mail: <a href={"mailto:" + kontakty[0].email}>{kontakty[0].email}</a>
                        </p>
                        <p>
                            {kontakty[0].zastupca2}<br />
                            Tel. {kontakty[0].tel2}<br />
                            E-mail: <a href={"mailto:" + kontakty[0].email2}>{kontakty[0].email2}</a>
                        </p>
                    </Grid>
                    <Grid item sm={4}>
                        <h3>{kontakty[1].name}</h3>

                        <p>
                            <i className="bi bi-geo-alt-fill" />
                            <Link target="_blank" href={kontakty[1].link_miestnosti}>
                                <strong> {kontakty[1].miestnost}</strong>
                            </Link>
                            <br />
                            {kontakty[1].zastupca}<br />
                            Tel. {kontakty[1].tel}<br />
                            E-mail: <a href={'mailto:' + kontakty[1].email}>{kontakty[1].email}</a>
                        </p>
                    </Grid>
                    <Grid item sm={4}>
                        <h3>{kontakty[2].name}</h3>

                        <p>
                            <i className="bi bi-geo-alt-fill" />
                            <Link target="_blank" href={kontakty[2].link_miestnosti}>
                                <strong> {kontakty[2].miestnost}</strong>
                            </Link>
                            <br />
                            {kontakty[2].zastupca}<br />
                            {kontakty[2].zastupca2}<br />
                            Tel. {kontakty[2].tel}<br />
                        </p>
                    </Grid>
                </Grid>
                <br />
                <Grid container spacig={2}>
                    <Grid item xs={6}>
                        <h2>Kontaktný formulár</h2>
                    </Grid>
                    <Grid item xs={6}>
                        <Image
                            src={obrazok}
                            alt="kontakt"

                        />
                    </Grid>
                </Grid>
                <KontaktnyFormular />
            </Container>
        </Container>
    </>
}
