import {Box, Breadcrumbs, Container, Dialog, Fab, Grid, Typography} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import * as React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AppLink from "../../utils/AppLink";
import ImageSlider from "../../components/ImageSlider";

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <Box
                sx={{
                    width: 300,
                    height: 300,
                    backgroundColor: '#add8e6',
                }}
            >
                <Fab
                    size="small"
                    color="info"
                    aria-label="add"
                    style={{position: 'absolute', bottom: 130, left: 0}}
                >
                    <ArrowBackIosIcon/>
                </Fab>
                <Fab
                    size="small"
                    color="info"
                    aria-label="add"
                    style={{position: 'absolute', bottom: 130, right: 0}}
                >
                    <ArrowForwardIosIcon/>
                </Fab>
            </Box>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

// TODO: tu upravit tie mly bo su zbytocne
export default function PripravneKurzy({pKurz}) {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };


    return (
        <Container>
                <Breadcrumbs
                    aria-label="breadcrumb"
                    separator=">"
                    className="breadcrumbs"
                >
                    <AppLink underline="hover" color="inherit" href="/spolupracuj">
                        Štúdium
                    </AppLink>
                    <AppLink underline="hover" color="inherit" href="/uchadzac">
                        Uchádzač
                    </AppLink>
                    <Typography>Prípravné kurzy</Typography>
                </Breadcrumbs>
                <h1>Prípravné kurzy</h1>
                <Grid container direction="row" justifyContent="space-between">
                    <Grid item sm={12} md={5}>
                        <h5>
                            Katedra dizajnu Fakulty umení Technickej univerzity v Košiciach
                            pozýva záujemcov na Prípravný kurz kresby a dizajnu. Kurz je
                            zameraný na rozvoj kresliarskej zručnosti, výtvarnej kompozície,
                            estetického cítenia a navrhovania dizajnu produktov.
                        </h5>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Box sx={{position: 'relative'}}>
                            <h4>
                                Kurz je predbežne plánovaný v termíne od {pKurz.od} do{' '}
                                {pKurz.do}.
                            </h4>
                            <p style={{fontSize: '12px'}}>
                                Vzhľadom na aktuálnu situáciu vás o zmenách budeme vopred
                                informovať.
                            </p>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: '-15px auto -15px -30px'
                                }}
                                display={{
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block'
                                }}
                            >
                                <img src="/zatvorkaV.png" alt='zatvorka' height='100%' width='auto'/>
                            </Box>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: '-15px -30px -15px auto'
                                }}
                                display={{
                                    xs: 'none',
                                    sm: 'none',
                                    md: 'block'
                                }}
                            >
                                <img src="/zatvorkaV2.png" alt='zatvorka'height='100%' width='auto'/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <h3>Miesto a čas konania</h3>
                <p>
                    <img src="/sipocka.png"/> {pKurz.miesto}
                </p>
                <p>
                    <img src="/sipocka.png"/> {pKurz.cas}
                </p>

                <h3>Cena kurzu</h3>
                <p>
                    <img src="/sipocka.png"/> {pKurz.cena},–€
                </p>
                <p>
                    <img src="/sipocka.png"/> celkový rozsah - 30 hodín
                </p>
                <p>
                    <img src="/sipocka.png"/> pri neúčasti na prípravnom kurze sa
                    poplatok nevracia.
                </p>

                <h3>Odborný garant</h3>
                <p>
                    <img src="/sipocka.png"/> doc. Mgr. art. Andrej Haščák, ArtD
                </p>

                <h3>Informácie o prihláške na kurz</h3>
                {/* <Grid
                 container
                 direction="row"
                 justifyContent="space-around"
                 spacing={2}>
                    <Grid item sx={4}>
                        <p>Technická univerzita v Košiciach<br /> Fakulta umení<br /> Katedra dizajnu<br /> Watsonova 4<br /> 042 00 Košice - Sever </p>
                        <p>tel.:+ 421 55 602 2247, 55 602 2177 <br />e-mail: kd.fu@tuke.sk</p>
                    </Grid>
                    <Grid item sx={10}></Grid>
                </Grid> */}
                <Container>
                    <p>
                        Technická univerzita v Košiciach
                        <br/> Fakulta umení
                        <br/> Katedra dizajnu
                        <br/> Watsonova 4<br/> 042 00 Košice - Sever{' '}
                    </p>
                    <p>
                        <i className="bi bi-telephone-fill"></i> tel.:+ 421 55 602 2247, 55
                        602 2177 <br/>
                        <i className="bi bi-envelope"></i> e-mail: kd.fu@tuke.sk
                    </p>
                </Container>
                {/* <h1>Fotogaléria z kurzu</h1> */}
                {/* TODO dialog popup */}
                {/* <Button
                    variant="contained"
                    color="primary">Zobraziť viac</Button> */}
                <div style={{position: 'relative'}}>
                    <Typography variant="subtitle1" component="div">
                        <h1
                            style={{
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                fontSize: '60px',
                                letterSpacing: '-1px',
                            }}
                        >
                            Fotogaléria z kurzu
                            <ImageSlider galery={pKurz.foto}/>
                        </h1>
                    </Typography>

                    <SimpleDialog
                        selectedValue={selectedValue}
                        open={open}
                        onClose={handleClose}
                    />
                </div>

        </Container>
    );
}

export async function getStaticProps() {
    const pKurzRes = await axios.get('https://katedra-dizajnu.herokuapp.com/p-kurz');

    return {
        props: {
            pKurz: pKurzRes.data,
        },
    };
}
