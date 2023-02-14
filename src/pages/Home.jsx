import { Link } from 'react-router-dom';
import Beans from '../components/UI/Beans';

import beans from '../assets/icons/coffe-beans_white.svg';
import solimo from '../assets/image/items-img/solimo-coffee.jpg';
import presto from '../assets/image/items-img/presto-coffee.jpg';
import aromistico from '../assets/image/items-img/aromistico-coffee.jpg';

import '../styles/home.scss';

const Home = () => {
    return (
        <>
        <section className="main">
            <div className="container">
                <div className="main__block">
                    <h1 className="main__title">
                        Everything You Love About Coffee
                    </h1>
                    <div className="main__coffee-beans">
                        <hr className='main__hr'/>
                        <img src={beans} alt="" className="main__beans-img" />
                        <hr className='main__hr'/>
                    </div>
                    <h2 className="main__subtitle">
                    We makes every day full of energy and taste <br />Want to try our beans?
                    </h2>
                    <div className="main__btn">
                        <Link className='main__btn-link' to='/shop'>More</Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="about">
            <h2 className="title">About Us</h2>
            <Beans/>
            <div className="about__subtitle">
            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
            Afraid at highly months do things on at. Situation recommend objection do intention
            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
            met spot shy want. Children me laughing we prospect answered followed. At it went
            is song that held help face. <br /> <br />
            Now residence dashwoods she excellent you. Shade being under his bed her, Much
            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
            horrible but confined day end marriage. Eagerness furniture set preserved far
            recommend. Did even but nor are most gave hope. Secure active living depend son
            repair day ladies now.
            </div>
        </section>

        <section className="best">
            <h2 className="title">Our best</h2>
            <div className="best__product-wrapper">
                <div className="best__product-block">
                    <img src={solimo} alt="product" className='best__product-img' />
                    <div className="best__product-title">
                        Solimo Coffee Beans 2 kg
                    </div>
                    <div className="best__product-price">
                        10.73$
                    </div>
                </div>

                <div className="best__product-block">
                    <img src={presto} alt="product" className='best__product-img' />
                    <div className="best__product-title">
                        Presto Coffee Beans 1 kg
                    </div>
                    <div className="best__product-price">
                        15.99$
                    </div>
                </div>

                <div className="best__product-block">
                    <img src={aromistico} alt="product" className='best__product-img' />
                    <div className="best__product-title">
                        AROMISTICO Coffee 1 kg
                    </div>
                    <div className="best__product-price">
                        6.99$
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home;