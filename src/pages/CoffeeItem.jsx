import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchCoffees} from '../redux/slices/coffeeSlice';

import Spinner from '../components/Spinner/Spinner';

import CommonSection from "../components/UI/CommonSection";
import Beans from "../components/UI/Beans";

import coffe from '../assets/image/img/about-coffeee.jpg'

import '../styles/coffee-item.scss';

const CoffeeItem = () => {

    const {id} = useParams();
    const dispatch = useDispatch();
    const coffeesLoadingStatus = useSelector(state => state.coffees.coffeesLoadingStatus);

    useEffect(() => {
            dispatch(fetchCoffees());
    }, []);

    const coffeesItems = useSelector(state => state.coffees.coffees);

    const coffeesItem = coffeesItems.find(item => item.id == id);

    if (coffeesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (coffeesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Помилка загрузки</h5>
    }

    if (!coffeesItem) {
        return 'Загрузка...'
    }

    const {country, name, price} = coffeesItem
    console.log(coffeesItem)


    return (
        <>
            <CommonSection title='Our Coffee'/>
        
            <section className="coffee">
                <img src={coffe} alt="coffee" className="coffee__img" />
                
                <div className="coffee__descr">
                    <h2 className="title-pt-0">{name}</h2>
                    <Beans/>
                    <div className="coffee__country">
                        <div className="coffee__country-title">
                            Country:
                        </div>
                        <div className="coffee__country-name">
                            {country}
                        </div>
                    </div>
                    <div className="coffee__description">
                        <div className="coffee__description-value">
                        <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="coffee__price">
                        <div className="coffee__price-title">
                            Price:
                        </div>
                        <div className="coffee__price-value">
                            {price}$
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoffeeItem;