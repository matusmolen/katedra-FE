import Footer from './Footer';
import Header from './Header';
import {Box} from "@mui/material";

function Layout(props) {
    return (
        <Box sx={{height: '100%', display: 'flex', flexDirection: 'column'}}>
            <Header/>
            <main style={{paddingBottom: '2em', flexGrow: 1}}>{props.children}</main>
            <Footer/>
        </Box>
    );
}

export default Layout;
