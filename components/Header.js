import React from 'react';
import {AppBar, Box, Container, Toolbar, useMediaQuery} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import {styled} from '@mui/system';
import LogoIcon from "./LogoIcon";
import AppLink from "../utils/AppLink";
import MobileMenu from "./MobileMenu";
import RegularMenu from "./RegularMenu";


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



function Header() {
    const mobileScreen = useMediaQuery('(max-width:800px)');
    return (
        <>
            <AppBar color="transparent" elevation={0} position="static">
                <Container sx={{paddingY: '16px'}}>
                    <Toolbar disableGutters>
                        <Box sx={{flexGrow:1}} justifyContent='center'>
                            <AppLink href='/' underline='none' style={{display: 'flex'}}>
                                <LogoIcon/>
                            </AppLink>
                        </Box>
                        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                            {!mobileScreen && <RegularMenu/>}

                            {/*<SocialLink target='_blank' href="https://www.facebook.com" underline='none'>*/}
                            {/*    <FacebookOutlinedIcon/>*/}
                            {/*</SocialLink>*/}
                            <SocialLink target='_blank' href="https://www.instagram.com/futu_kd/">
                                <InstagramIcon/>
                            </SocialLink>
                            {mobileScreen && <MobileMenu/>}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>


        </>
    );
}

export default Header;
