import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import {Collapse, Grid, useMediaQuery} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import theme from "../../styles/theme";


export const RoomLink = styled('a')(({theme}) => ({
    fontWeight: 'bold',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const DescriptionExpandButton = styled('div')(({theme}) => ({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '1em',
    borderRadius: '100%',
    padding: '14px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    fontSize: '12px',
    '&:hover': {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
    },
    '& svg': {
        strokeWidth: '1.5px',
    },
    [theme.breakpoints.up('md')]: {
        transform: 'translateY(-14px)',
    },
    [theme.breakpoints.down('md')]: {
        transform: 'translateY(-5px)',
    }
}));

export default function Room({room}) {
    const [openDescription, setOpenDescription] = React.useState(false);
    const largeScreen = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Grid item xs={12} md={6}>
            <h2 style={{marginTop: largeScreen && room.nazov.toUpperCase() === "INOVÁCIA" ? '1em' : 0}}>
                {room.nazov}
                <DescriptionExpandButton
                    onClick={() => setOpenDescription(!openDescription)}
                    variant='contained'
                    color='primary'
                >
                    <ArrowDownwardIcon sx={{transform: `rotate(${openDescription ? '180deg' : '0deg'})`}}/>
                </DescriptionExpandButton>
            </h2>
            <div className='rooms'>
                <RoomOutlinedIcon/>
                <RoomLink target="_blank" href={room.link1}>{room.miestnost1}</RoomLink>
                |
                <RoomLink target="_blank" href={room.link2}>{room.miestnost2}</RoomLink>
            </div>
            <ReactMarkdown plugins={[remarkGfm]}>{room.ludia}</ReactMarkdown>
            <Collapse in={openDescription} timeout="auto" unmountOnExit>
                <div>{room.popis}</div>
            </Collapse>
        </Grid>
    )

}