import {
    Container,
    Breadcrumbs,
    Link,
    Typography,
    Grid,
    Button,
} from '@material-ui/core';
import React from 'react';
import ImageSlider from '../../../components/ImageSlider';

export async function getStaticPaths() {
    const res = await fetch('http://localhost:1337/absolvents');
    const data = await res.json();

    const paths = data.map(absolvent => {
        return {
            params: { id: absolvent.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch('http://localhost:1337/absolvents/' + id);
    const data = await res.json();

    return {
        props: { absolvent: data }
    }
}


export default function MenoAbsolventa({ absolvent }) {
    
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Link underline="hover" color="inherit" href="/studium/">
                    Štúdium
                </Link>
                <Link underline="hover" color="inherit" href="/uchadzac">
                    Uchádzač
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="../uchadzac/uspesni_absolventi"
                >
                    Úspešní absolventi
                </Link>
                <Typography color="text.primary">{absolvent.name}</Typography>
            </Breadcrumbs>

            <h1
                style={{
                    fontFamily: 'Technik',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 60,
                }}
            >
                {absolvent.name}
            </h1>
            <Container>
                <Grid container justifyContext="space-evenly" spacing={2}>
                    <Grid item xs={6}>
                        <div style={{ maxWidth: 536, whiteSpace: 'pre-wrap' }}>
                            <h5>
                                {absolvent.description}
                            </h5>
                        </div>
                        <div style={{ maxWidth: 402, whiteSpace: 'pre-wrap' }}>
                            {/* {absolvent.bio.substring(0, 770)} */}
                            {absolvent.bio_odsek1}
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: 100 }}>
                        <img src={'http://localhost:1337' + absolvent.profile.url} alt="profilovy obrazok" width="450" height="450" style={{ borderRadius: '50%' }} />
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid
                    container
                    justifyContext="space-evenly"
                    spacing={2}
                    style={{ marginTop: 48 }}
                >
                    <Grid item xs={6}>
                        <img src={'http://localhost:1337' + absolvent.desc_picture.url} alt="doplnujuci obrazok" />
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-start"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item>
                                <h1
                                    style={{
                                        fontFamily: 'Technik',
                                        fontStyle: 'normal',
                                        fontWeight: 'normal',
                                        fontSize: 60,
                                    }}
                                >
                                    Prehľad prác
                                </h1>
                            </Grid>
                            <Grid item>
                                <ImageSlider galery={absolvent.prace}/>                                                            
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <div style={{ maxWidth: 455, marginLeft: 104, whiteSpace: 'pre-wrap' }}>

                            {absolvent.bio_odsek2}

                        </div>
                    </Grid>
                </Grid>

            </Container>
        </Container>
    );

}