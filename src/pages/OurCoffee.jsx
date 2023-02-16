import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import {filteredCoffees} from '../redux/slices/coffeeSlice';

import CommonSection from "../components/UI/CommonSection";
import AboutGoods from "../components/UI/AboutGoods";
import Product from "../components/UI/Product";

import girl from '../assets/image/img/girl.png';

import '../styles/our-coffee.scss';

const OurCoffee = () => {

    const inputRef = useRef('');
    const dispatch = useDispatch();
    const filterCoffees = () => {
		dispatch(filteredCoffees(inputRef.current.value));
	};

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
                        <input ref={inputRef} onChange={filterCoffees} type="text" placeholder="start typing here..." className="filter__look-input" />
                    </div>

                    <div className="filter__country" id="myDIV">
                        <div className="filter__country-title">
                            Or filter
                        </div>

                        <div className="filter__country-block-btn">
                            <button className="btn">
                                Brazil
                            </button>
                            <button className='btn'>
                                Kenya
                            </button>
                            <button className='btn'>
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