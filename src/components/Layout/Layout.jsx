import Header from '../Header/Header';
import Routers from '../../routers/Routers';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <>
            <Header/>
            <div>
                <Routers/>
            </div>
            <Footer/>
        </>
    )
}

export default Layout