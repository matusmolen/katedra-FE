import {Box, Fab, useScrollTrigger, Zoom} from '@mui/material';
import React from 'react'

const BackToTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });
    return (
        <Zoom in={trigger}>
            <Box
                onClick={
                    () => window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 999 }}
            >
                <Fab color="secondary" aria-label="scroll back to top">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.801175 11.9992L2.77517 13.9732L10.6012 6.16122L10.6012 23.1992L13.4012 23.1992L13.4012 6.16122L21.2132 13.9872L23.2012 11.9992L12.0012 0.79922L0.801175 11.9992Z" fill="black"/>
                    </svg>
                </Fab>
            </Box>
        </Zoom>
    )
}

export default BackToTop




