
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {fetchCoffees} from '../../redux/slices/coffeeSlice';

import ProductList from './ProductList';
import Spinner from '../Spinner/Spinner';

import '../../styles/product.scss';


const Product = () => {

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

        return arr.map(({id, ...props}) => {
            return (
                    <ProductList {...props}/>
            )
        })
    }

    const elements = renderCoffeesList(coffeesItems);

    return (
            <section className="product">
                <div className='product__wrapper'>
                    {elements}
                </div>
            </section>
    )
}

export default Product;