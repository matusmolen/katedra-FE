import {
    Container,
    Breadcrumbs,
    Link,
    Typography,
    Grid,
    Button,
    Box,
    Dialog,
    Fab
} from '@material-ui/core';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PropTypes from 'prop-types';
import React from 'react';
import ImageSlider from '../../../components/ImageSlider';

export async function getStaticPaths() {
    const res = await fetch('http://localhost:1337/teachers');
    const data = await res.json();

    const paths = data.map(teacher => {
        return {
            params: { id: teacher.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch('http://localhost:1337/teachers/' + id);
    const data = await res.json();

    return {
        props: { teacher: data }
    }
}


export default function Meno({ teacher }) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb" separator=">">
                <Link underline="hover" color="inherit" href="/studium/">
                    Štúdium
                </Link>
                <Link underline="hover" color="inherit" href="/studium/">
                    Študent
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/studium/spoznaj_ucitelov"
                >
                    Spoznaj učiteľov
                </Link>
                <Typography color="text.primary">{teacher.name}</Typography>
            </Breadcrumbs>

            <h1
                style={{
                    fontFamily: 'Technik',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 60,
                }}
            >
                {teacher.name}
            </h1>
            <Container>
                <Grid container justifyContext="space-evenly" spacing={2}>
                    <Grid item xs={6}>
                        <div style={{ maxWidth: 536, whiteSpace: 'pre-wrap' }}>
                            <h5>
                                {teacher.description}
                            </h5>
                        </div>
                        <div style={{ maxWidth: 402, whiteSpace: 'pre-wrap' }}>
                            {/* {teacher.bio.substring(0, 770)} */}
                            {teacher.bio_odsek1}
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ marginTop: 100 }}>
                        <img src={'http://localhost:1337' + teacher.profile.url} alt="profilovy obrazok" width="450" height="450" style={{ borderRadius: '50%' }} />
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid
                    container
                    justifyContent="space-evenly"
                    spacing={2}
                    style={{ marginTop: 48 }}
                >
                    <Grid item xs={6}>
                        <img src={'http://localhost:1337' + teacher.desc_picture.url} alt="doplnujuci obrazok" />
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
                                <ImageSlider galery={teacher.prace}/>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <div style={{ maxWidth: 455, marginLeft: 104, whiteSpace: 'pre-wrap' }}>

                            {teacher.bio_odsek2}

                        </div>
                    </Grid>
                </Grid>

            </Container>
        </Container>
    );

}