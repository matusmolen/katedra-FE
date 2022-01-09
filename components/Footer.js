import {Box, Button, Container, Grid, TextField} from '@mui/material';
import AppLink from "../utils/AppLink";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import React from "react";
import theme from "../styles/theme";

function Footer() {
    return (
        <footer>
            <Box sx={{backgroundColor: '#000000', color: '#FFFFFF', padding:'1em 0 2em'}}>
                <Container>
                    <Grid container spacing={1}>
                        <Grid item sm={6}>
                            <h3>
                                Katedra dizajnu <br/> Fakulta umení Košice
                            </h3>
                            <Grid container spacing={1}>
                                <Grid item xs={1}>
                                    <RoomOutlinedIcon color='primary'/>
                                </Grid>
                                <Grid item xs={11}>
                                    Watsonova 4, <br/>
                                    040 01 Košice - Sever <br/>
                                    <AppLink target="_blank" color='#FFFFFF'
                                       href="https://fu.tuke.sk/wps/portal/fu/katedry/katedra-dizajnu">
                                        <strong>www.futuke.sk</strong>
                                    </AppLink>
                                    <br/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm={6}>
                            <h3 style={{color: theme.palette.primary.main}}>NEWSLETTER</h3>
                            <form>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={8} md={6}>
                                        <TextField
                                            id="outlin ed-size-small"
                                            placeholder="Zadajte email"
                                            variant="outlined"
                                            size="small"
                                            color='primary'
                                            sx={{
                                                borderRadius: 12,
                                                width: '100%',
                                                backgroundColor: '#FFFFFF',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4} md={6}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{borderRadius: 20}}
                                        >
                                            Odoslať
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                            <p>
                                Nezmeškaj žiadne novinky! Odoberaj newsletter <br/>a buď
                                informovaný ako prvý.
                            </p>
                            <p>
                                <AppLink href="/spolupracuj" color='primary'>
                                    Spolupracuj s katedrou dizajnu
                                </AppLink>
                            </p>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;
