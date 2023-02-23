import { Link } from 'react-router-dom';
import {MdAddShoppingCart} from 'react-icons/md';
import {addItem} from '../../redux/slices/coffeeSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

import '../../styles/product-list.scss';

import image from '../../assets/image/items-img/aromistico-coffee.jpg';

const ProductList = ({id, name, country, price}) => {

    const addToCard = () => {
        dispatch(addItem({
            id: id,
            productName: name,
            price: price,
            imgUrl: image
        }));

        toast.success('Product added successfully');
    };

    const dispatch = useDispatch();

    return (
        <>
            <div className="product__block">
                <Link to={`/shop/${id}`}>
                    <img src={image} alt="" className='product__img' />
                </Link>
                <Link to={`/shop/${id}`} className='product__link'>
                    <div className="product__title">
                        {name}
                    </div>
                </Link>
                <div className="product__country">
                    {country}
                </div>
                <div className="product__price">
                    <motion.div whileTap={{scale: 1.2}} className='product__add'>
                        <MdAddShoppingCart onClick={addToCard}  className='product__add-item'/>
                    </motion.div>
                    {`${price}$`}
                </div>
            </div>
        </>
    )
}

export default ProductList;