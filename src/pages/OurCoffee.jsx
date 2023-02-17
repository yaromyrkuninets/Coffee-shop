import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import {filteredCoffeesByName, filteredCoffeesByCoutry, reset} from '../redux/slices/coffeeSlice';

import CommonSection from "../components/UI/CommonSection";
import AboutGoods from "../components/UI/AboutGoods";
import Product from "../components/UI/Product";

import girl from '../assets/image/img/girl.png';

import '../styles/our-coffee.scss';

const OurCoffee = () => {


    const inputRef = useRef('');
    const dispatch = useDispatch();

    const filteredByName = () => {
		dispatch(filteredCoffeesByName(inputRef.current.value));
	};


    const filteredByCountryBrazil = () => {
        dispatch(filteredCoffeesByCoutry("Brazil"))
    }

    const filteredByCountryKenya = () => {
        dispatch(filteredCoffeesByCoutry("Kenya"))
    }

    const filteredByCountryColumbia = () => {
        dispatch(filteredCoffeesByCoutry("Columbia"))
    }

    const all = () => {
        dispatch(reset())
    }
        
    return (

        <>
            <CommonSection title='Our Coffe'/>

            <section className="about-coffee">
                <img src={girl} alt="girl" className="about-coffee__img" />
                
                <AboutGoods/>
            </section>

            <section className="filter">
                <hr className="filter__hr" />
                <div className="filter__elem">
                    <div className="filter__look">
                        <div className="filter__look-title">
                            Lookiing for
                        </div>
                        <input ref={inputRef} onChange={filteredByName} type="text" placeholder="start typing here..." className="filter__look-input" />
                    </div>

                    <div className="filter__country" id="myDIV">
                        <div className="filter__country-title">
                            Or filter
                        </div>

                        <div className="filter__country-block-btn">
                            <button className='btn' onClick={all}>
                                All
                            </button>
                            <button className="btn" onClick={filteredByCountryBrazil}>
                                Brazil
                            </button>
                            <button className='btn' onClick={filteredByCountryKenya}>
                                Kenya
                            </button>
                            <button className='btn' onClick={filteredByCountryColumbia}>
                                Columbia
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Product/>
        </>
        
    )
}

export default OurCoffee;