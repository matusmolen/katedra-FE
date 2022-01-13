// import classes from '../styles/Header.module.css';
import React, {useState} from 'react';
import {AppBar, Box, Container, Tab, Toolbar} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import {styled} from '@mui/system';
import {useRouter} from "next/router";
import LogoIcon from "./LogoIcon";
import AppLink from "../utils/AppLink";

const StyledTabBtn = styled(Tab)(({theme}) => ({
    fontSize: '16px',
    fontFamily: 'Technik-200',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '15px',
    display: 'flex',
    color: '#000000',

    '&:hover, &.active': {
        textDecorationLine: 'underline',
        textDecorationStyle: 'wavy',
        textDecorationColor: theme.palette.primary.main,
    },
}));
const SocialLink = styled(AppLink)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0 0.5em',
    color: 'inherit',
    transition: 'color 0.2s ease-in-out',
    '&:hover': {
        color: theme.palette.primary.main,
    },
}));

const StyledMenuItem = styled(MenuItem)(({theme}) => ({
    transition: 'background-color 0.2s ease-in-out',
    color: '#000000',
    '&:hover': {
        backgroundColor: '#e5ffe7',
    },
}));

const Logo = styled('div')({
    display: 'flex',
    flowDirection: 'row',
    alignItems: 'center',
    userSelect: 'none',
    '& p': {
        fontSize: '12px',
        marginLeft: '1em',
        maxWidth: 'min-content',
        lineHeight: '15px'
    }
});


function Header() {
    const router = useRouter();
    const [anchorStudyMenu, setAnchorStudyMenu] = useState(null);
    const [anchorGalleryMenu, setAnchorGalleryMenu] = useState(null);

    return (
        <>
            <AppBar color="transparent" elevation={0} position="static">
                <Container>
                    <Toolbar disableGutters>
                        <AppLink href='/' underline='none' sx={{flexGrow:1}} color='inherit'>
                            <Logo>
                                <LogoIcon/>
                                <p>Fakulta umení</p>
                            </Logo>
                        </AppLink>
                        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                            <AppLink href='/' underline='none'>
                                <StyledTabBtn
                                    label="Úvod"
                                    className={router.pathname === '/' ? 'active' : ''}
                                />
                            </AppLink>
                            <AppLink href='/okatedre' underline='none'>
                                <StyledTabBtn
                                    label="O katedre"
                                    className={router.pathname === '/okatedre' ? 'active' : ''}
                                />
                            </AppLink>
                            <AppLink href='/aktuality' underline='none'>
                                <StyledTabBtn
                                    label="Aktuality"
                                    className={router.pathname === '/aktuality' ? 'active' : ''}
                                />
                            </AppLink>
                            <StyledTabBtn
                                aria-controls="galeria"
                                onClick={(e) => setAnchorGalleryMenu(e.currentTarget)}
                                label="Galéria"
                                className={router.pathname.startsWith('/galeria') ? 'active' : ''}
                            />
                            <StyledTabBtn
                                aria-controls="studium"
                                onClick={(e) => setAnchorStudyMenu(e.currentTarget)}
                                label="Štúdium"
                                className={router.pathname === '/studium' || router.pathname === '/uchadzac' ? 'active' : ''}
                            />
                            <AppLink href='/kontakt' underline='none'>
                                <StyledTabBtn
                                    label="Kontakt"
                                    className={router.pathname === '/kontakt' ? 'active' : ''}
                                />
                            </AppLink>

                            {/*<SocialLink target='_blank' href="https://www.facebook.com" underline='none'>*/}
                            {/*    <FacebookOutlinedIcon/>*/}
                            {/*</SocialLink>*/}
                            <SocialLink target='_blank' href="https://www.instagram.com/futu_kd/">
                                <InstagramIcon/>
                            </SocialLink>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Menu
                position="relative"
                id="studium"
                onClose={() => setAnchorStudyMenu(null)}
                anchorEl={anchorStudyMenu}
                open={Boolean(anchorStudyMenu)}
                sx={{'ul': {padding: 0}}}
            >
                <AppLink href='/studium' underline='none'>
                    <StyledMenuItem onClick={() => setAnchorStudyMenu(null)}>
                        Študent
                    </StyledMenuItem>
                </AppLink>
                <AppLink href='/uchadzac' underline='none'>
                    <StyledMenuItem onClick={() => setAnchorStudyMenu(null)}>
                        Uchádzač
                    </StyledMenuItem>
                </AppLink>
            </Menu>
            <Menu
                position="relative"
                id="galeria"
                onClose={() => setAnchorGalleryMenu(null)}
                anchorEl={anchorGalleryMenu}
                open={Boolean(anchorGalleryMenu)}
                sx={{'ul': {padding: 0}}}
            >
                <AppLink href='/galeria/vystavy' underline='none'>
                    <StyledMenuItem onClick={() => setAnchorGalleryMenu(null)}>
                        Galéria výstav
                    </StyledMenuItem>
                </AppLink>
                <AppLink href='/galeria' underline='none'>
                    <StyledMenuItem onClick={() => setAnchorGalleryMenu(null)}>
                        Galéria prác
                    </StyledMenuItem>
                </AppLink>
            </Menu>
        </>
    );
}

export default Header;
