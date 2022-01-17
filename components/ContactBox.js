import {Box, Grid} from "@mui/material";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import {RoomLink} from "./room/Room";
import React from "react";
import {styled} from "@mui/material/styles";


export default function ContactBox({kontakt, fullWidth = false}) {
    return (
        <Grid item sm={12} md={fullWidth ? 12 : 6} lg={ fullWidth ? 12 : 4}>
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
                {kontakt.zastupca && <p style={{whiteSpace: 'pre-line'}}>{kontakt.zastupca}</p>}
                {kontakt.tel && <p style={{whiteSpace: 'pre-line'}}>{kontakt.tel}</p>}
                {kontakt.email &&
                    <p style={{whiteSpace: 'pre-line'}}>
                        <a href={"mailto:" + kontakt.email}>{kontakt.email}</a>
                    </p>
                }
            </Box>
            {kontakt.zastupca2 &&
                <Box sx={{marginTop: '1em', '& p': {margin: '0.25em 0'}}}>
                    {kontakt.zastupca2 && <p style={{whiteSpace: 'pre-line'}}>{kontakt.zastupca2}</p>}
                    {kontakt.tel2 && <p style={{whiteSpace: 'pre-line'}}>{kontakt.tel2}</p>}
                    {kontakt.email2 &&
                        <p style={{whiteSpace: 'pre-line'}}>
                            <a href={"mailto:" + kontakt.email2}>{kontakt.email2}</a>
                        </p>
                    }
                </Box>
            }
        </Grid>
    )
}