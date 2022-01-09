import Footer from './Footer';
import Header from './Header';

function Layout(props) {
    return (
        <div>
            <Header/>
            <main style={{paddingBottom: '2em'}}>{props.children}</main>
            <Footer/>
        </div>
    );
}

export default Layout;
