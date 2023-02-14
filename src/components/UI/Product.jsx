import {useHttp} from '../../hook/http.hook';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {fetchCoffees} from '../../redux/slices/coffeeSlice';

import Spinner from '../Spinner/Spinner';

import '../../styles/product.scss';

import img from '../../assets/image/items-img/aromistico-coffee.jpg';

const Product = ({name}) => {

    const coffeesItems = useSelector(state => state.coffees.coffees);
    const coffeesLoadingStatus = useSelector(state => state.coffees.coffeesLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();

    

    useEffect(() => {
        dispatch(fetchCoffees());
    }, []);

    return (
        <section className="product">
            <div className="product__wrapper">
                <div className="product__block">
                    <img src={img} alt="product" className='product__img' />
                    <div className="product__title">
                        {coffeesItems[0].country}
                    </div>
                    <div className="product__country">
                        Brazil
                    </div>
                    <div className="product__price">
                        10.73$
                    </div>
                </div>

                <div className="product__block">
                    <img src={img} alt="product" className='product__img' />
                    <div className="product__title">
                        Solimo Coffee Beans 2 kg
                    </div>
                    <div className="product__country">
                        Brazil
                    </div>
                    <div className="product__price">
                        10.73$
                    </div>
                </div>

                <div className="product__block">
                    <img src={img} alt="product" className='product__img' />
                    <div className="product__title">
                        Solimo Coffee Beans 2 kg
                    </div>
                    <div className="product__country">
                        Brazil
                    </div>
                    <div className="product__price">
                        10.73$
                    </div>
                </div>

                <div className="product__block">
                    <img src={img} alt="product" className='product__img' />
                    <div className="product__title">
                        Solimo Coffee Beans 2 kg
                    </div>
                    <div className="product__country">
                        Brazil
                    </div>
                    <div className="product__price">
                        10.73$
                    </div>
                </div>

                <div className="product__block">
                    <img src={img} alt="product" className='product__img' />
                    <div className="product__title">
                        Solimo Coffee Beans 2 kg
                    </div>
                    <div className="product__country">
                        Brazil
                    </div>
                    <div className="product__price">
                        10.73$
                    </div>
                </div>

                <div className="product__block">
                    <img src={img} alt="product" className='product__img' />
                    <div className="product__title">
                        Solimo Coffee Beans 2 kg
                    </div>
                    <div className="product__country">
                        Brazil
                    </div>
                    <div className="product__price">
                        10.73$
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product;