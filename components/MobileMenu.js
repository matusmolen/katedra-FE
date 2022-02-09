import React, {useEffect, useState} from 'react';
import {Button, Drawer} from "@mui/material";
import {makeStyles} from "@mui/styles";
import AppLink from "../utils/AppLink";
import {useRouter} from "next/router";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import {styled} from "@mui/material/styles";

const useStyles = makeStyles({
    toggleButton: {
        zIndex: 1201,
        '&.open': {
            color: '#FFFFFF',
        },
    },
    paper: {
        background: "#000000 !important",
        borderRadius: '12px 0px 0px 12px',
        minWidth: '69vw',
        alignItems: 'flex-end',
        textAlign: 'right',
        padding: '15vh 30px',
        gap: '4.5vh'
    },
    menuLink: {
        margin: 0,
        color: '#FFFFFF !important',
        textDecoration: 'none',
        fontSize: '34px',
        lineHeight: '44px',
        fontWeight: '400',
        fontFamily: 'Technik-200',
        textTransform: 'uppercase',
        cursor: 'pointer',
        '&.selected': {
            textDecoration: 'underline',
        },
    },
    subMenuLink: {
        margin: 0,
        color: '#FFFFFF !important',
        textDecoration: 'none',
        fontSize: '18px',
        lineHeight: '31px',
        fontWeight: '400',
        fontFamily: 'Technik-200',
        cursor: 'pointer',
        textTransform: 'none',
        '&.selected': {
            textDecoration: 'underline',
        },
    },
    subMenu: {
        display: 'none',
        flexDirection: 'column',
        gap: '2vh',
        marginTop: '2vh',
        '&.open': {
            display: 'flex',
        },
    }
});

const SubmenuExpandIcon = styled('div')(({theme}) => ({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '1em',
    borderRadius: '100%',
    padding: '3px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    fontSize: '7px',
    transform: 'translateY(-3px)',
    '& svg': {
        strokeWidth: '1px',
    },
}));

const MobileMenu = () => {
    const classes = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const [openGalleryMenu, setOpenGalleryMenu] = useState(false);
    const [openStudyMenu, setOpenStudyMenu] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsOpen(false)
        setOpenStudyMenu(false)
        setOpenGalleryMenu(false)
    }, [router.pathname]);


    return (
        <React.Fragment>
            <Button
                onClick={() => setIsOpen(!isOpen)}
                color="inherit"
                size={'large'}
                className={`${classes.toggleButton} ${isOpen ? 'open' : ''}`}
                endIcon={isOpen ? <CloseIcon/> : <MenuIcon/>}
            >
                MENU
            </Button>
            <Drawer
                classes={{paper: classes.paper}}
                anchor="right"
                open={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <AppLink
                    href='/'
                    underline='none'
                    className={`${classes.menuLink} ${router.pathname === '/' ? 'selected' : ''}`}
                >
                    Úvod
                </AppLink>
                <AppLink
                    href='/okatedre'
                    underline='none'
                    className={`${classes.menuLink} ${router.pathname === '/okatedre' ? 'selected' : ''}`}
                >
                    O katedre
                </AppLink>
                <AppLink
                    href='/aktuality'
                    underline='none'
                    className={`${classes.menuLink} ${router.pathname === '/aktuality' ? 'selected' : ''}`}
                >
                    Aktuality
                </AppLink>
                <div
                    className={`${classes.menuLink} ${router.pathname.startsWith('/galeria') ? 'selected' : ''}`}
                    onClick={() => setOpenGalleryMenu(!openGalleryMenu)}
                >
                    <SubmenuExpandIcon
                        variant='contained'
                        color='primary'
                    >
                        <ArrowDownwardIcon sx={{transform: `rotate(${openGalleryMenu ? '180deg' : '0deg'})`}}/>
                    </SubmenuExpandIcon>
                    Galéria
                    <div className={`${classes.subMenu} ${openGalleryMenu ? 'open' : ''}`}>
                        <AppLink href='/galeria/vystavy' underline='none' className={classes.subMenuLink}>
                            Galéria výstav
                        </AppLink>
                        <AppLink href='/galeria' underline='none' className={classes.subMenuLink}>
                            Galéria prác
                        </AppLink>
                    </div>
                </div>
                <div
                    label="Štúdium"
                    className={`
                        ${classes.menuLink} 
                        ${router.pathname === '/studium' || router.pathname === '/uchadzac' ? 'selected' : ''}
                    `}
                    onClick={() => setOpenStudyMenu(!openStudyMenu)}
                >
                    <SubmenuExpandIcon
                        variant='contained'
                        color='primary'
                    >
                        <ArrowDownwardIcon sx={{transform: `rotate(${openStudyMenu ? '180deg' : '0deg'})`}}/>
                    </SubmenuExpandIcon>
                    Štúdium
                    <div className={`${classes.subMenu} ${openStudyMenu ? 'open' : ''}`}>
                        <AppLink href='/studium' underline='none' className={classes.subMenuLink}>
                            Študent
                        </AppLink>
                        <AppLink href='/uchadzac' underline='none' className={classes.subMenuLink}>
                            Uchádzač
                        </AppLink>
                    </div>
                </div>

                <AppLink
                    href='/kontakt'
                    underline='none'
                    className={`${classes.menuLink} ${router.pathname === '/kontakt' ? 'selected' : ''}`}
                >
                    Kontakt
                </AppLink>
            </Drawer>
        </React.Fragment>
    )
}

export default MobileMenu