import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import {fetchCoffees} from '../redux/slices/coffeeSlice';
import Spinner from '../components/Spinner/Spinner';
import Beans from '../components/UI/Beans';
import ProductList from '../components/UI/ProductList'

import beans from '../assets/icons/coffe-beans_white.svg';

import '../styles/home.scss';

const Home = () => {

    const coffeesItems = useSelector(state => state.coffees.coffees);
    const coffeesLoadingStatus = useSelector(state => state.coffees.coffeesLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoffees());
    }, []);

    if (coffeesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (coffeesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Помилка загрузки</h5>
    }

    const renderCoffeesList = (arr) => {
        if (arr.length === 0) {
            return (
                    <h5 className="text-center mt-5">Товару поки немає</h5>
            )
        }

        const limitedArr = arr.slice(0, 3);

        return limitedArr.map(({id, ...props}) => {
            return (
                    <ProductList {...props} id={id}/>
            )
        })
    }

    const elements = renderCoffeesList(coffeesItems);

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
                {elements}
            </div>
        </section>
        </>
    )
}

export default Home;