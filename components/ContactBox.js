import {Box, Grid} from "@mui/material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import {RoomLink} from "./room/Room";
import React from "react";
import {styled} from "@mui/material/styles";

const Contact = styled('div')(({theme}) => ({
    '& p': {
        // display: 'flex',
        // alignItems: 'center',
        '& svg': {
            marginRight: theme.spacing(1),
            fill: theme.palette.primary.main,
        },
    }
}));

export default function ContactBox({kontakt}) {
    return (
        <Grid item sm={12} md={6} lg={4}>
            <Contact>
                <h3>{kontakt.name}</h3>
                <Box className='rooms'>
                    <RoomOutlinedIcon/>
                    <RoomLink target="_blank" href={kontakt.link_miestnosti}>{kontakt.miestnost}</RoomLink>
                    {kontakt.miestnost2 && '|'}
                    {kontakt.miestnost2 &&
                        <RoomLink target="_blank" href={kontakt.link_miestnosti2}>{kontakt.miestnost2}</RoomLink>
                    }
                </Box>
                <Box sx={{'& p': {margin: '0.25em 0'}}}>
                    {kontakt.zastupca && <p>{kontakt.zastupca}</p>}
                    {kontakt.tel && <p>{kontakt.tel}</p>}
                    {kontakt.email && <p><a href={"mailto:" + kontakt.email}>{kontakt.email}</a></p>}
                </Box>
                {kontakt.zastupca2 &&
                    <Box sx={{marginTop: '1em', '& p': {margin: '0.25em 0'}}}>
                        {kontakt.zastupca2 && <p>{kontakt.zastupca2}</p>}
                        {kontakt.tel2 && <p>{kontakt.tel2}</p>}
                        {kontakt.email2 && <p><a href={"mailto:" + kontakt.email2}>{kontakt.email2}</a></p>}
                    </Box>
                }
            </Contact>
        </Grid>
    )
}