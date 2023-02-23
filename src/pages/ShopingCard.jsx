import { useSelector, useDispatch } from "react-redux";
import {deleteItem} from '../redux/slices/coffeeSlice';
import { motion } from 'framer-motion';
import {FaTrashAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";

import CommonSection from "../components/UI/CommonSection";

import '../styles/shoping-card.scss';

const ShopingCard = () => {

    const totalAmount = useSelector(state => state.coffees.totalAmount);
    const items = useSelector(state => state.coffees.cartItems);

    return (
        <>
        <CommonSection title='Shoping Card'/>
        <div className="card">

            {
                items.length === 0 ? (<h2 className='fs-4 text-center'>No item added to the cart</h2>) : (

                    <table  className='table bordered'>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                items.map((item, index) => (
                                    <Tr item={item} key={index}/>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }

            <div className="card__wrapper">
                <div className="card__subtotal">
                    <div className="card__subtotal-title">
                        Subtotal
                    </div>
                    <div className="card__subtotal-price">
                        ${totalAmount.toFixed(2)}
                    </div>
                </div>
                <div className="card__subtitle">
                    taxes and shipping will calculate in checkout
                </div>
                <button className="buy__btn-w-300">
                    <Link to='/checkout'>Checkout</Link>
                </button>
                <button className="buy__btn-w-300">
                    <Link to='/shop'>Continue Shoping</Link>
                </button>
            </div>
        </div>
        
        </>
    )
}

const Tr = ({item}) => {

    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(deleteItem(item.id));
    }

    return (
        <tr>
            <td>
                <img src={item.imgUrl} alt="" />
            </td>
            <td>{item.productName}</td>
            <td>${item.price}</td>
            <td>{item.quantity}px</td>
            <td>
                <motion.div whileTap={{scale: 1.3}}>
                    <FaTrashAlt onClick={deleteProduct} className="trash"/>
                </motion.div>
            </td>
        </tr>
    )
}

export default ShopingCard;