import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#00FF0A',
            hover: '#00C242',
            pressed: '#00AE3B',
            disabled: '#00C242',
        },
        secondary: {
            main: '#00FF0A',
            hover: '#00C242',
            pressed: '#00AE3B',
            disabled: '#00C242',
        },
        // primary: {
        //   main: 'rgba(0, 0, 0, 0.6)',
        // },
        grey: {
            light: '#BDBDBD',
        },
    },

    status: {
        error: {
            main: '#EC607A',
        },
        info: {
            main: '#000000',
        },
    },
    typography: {
        fontFamily: ['Technik-200', 'Technik', 'Normatica'],
        button: {
            textTransform: 'none',
        },
    },
});

export default theme;
