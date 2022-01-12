import {Grid} from "@mui/material";
import ImageSlider from "../ImageSlider";
import React from "react";

export default function PersonPage({person}) {
    return (
        <>
            <h1
                style={{
                    fontFamily: 'Technik',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: 60,
                    marginBottom: '0'
                }}
            >
                {person.name}
            </h1>

            <Grid container spacing={4}>
                <Grid item md={6}>
                    <h5 style={{whiteSpace: 'pre-wrap'}}>
                        {person.description}
                    </h5>
                    <p style={{whiteSpace: 'pre-wrap', margin: 0}}>
                        {person.bio_odsek1}
                    </p>
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={person.profile ? person.profile.url : ''} alt="profilovy obrazok" width="80%"
                         height="auto" style={{borderRadius: '50%'}}/>
                </Grid>
            </Grid>

            <Grid container spacing={4} sx={{marginTop: '2em'}}>
                <Grid item md={6}>
                    <img
                        src={person.desc_picture ? person.desc_picture.url : ''}
                        alt={person.desc_picture?.alternativeText}
                        width="100%"
                        height="auto"
                    />
                    <h1
                        style={{
                            fontFamily: 'Technik',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: 60,
                        }}
                    >
                        Prehľad prác
                        <ImageSlider galery={person.prace.length > 0 ? person.prace : []}/>
                    </h1>
                </Grid>
                <Grid item md={6}>
                    <p style={{whiteSpace: 'pre-wrap', margin: 0}}>
                        {person.bio_odsek2}
                    </p>
                </Grid>
            </Grid>
        </>
    )
}