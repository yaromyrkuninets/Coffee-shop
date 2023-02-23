import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from 'framer-motion';

import logo from '../../assets/icons/logo.svg';

import './header.scss'

const nav__links = [
    {
        path: '/home',
        display: 'Coffee house'
    },
    {
        path: '/shop',
        display: 'Our coffee'
    },
    {
        path: '/about',
        display: 'For your pleasure'
    }
]

const Header = () => {

    const quantity = useSelector(state => state.coffees.totalQuantity);

    return (
        <header className='header'>
            <div className="header__menu">
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                </div>
                {
                    nav__links.map((item, index) => (
                            <li className="header__nav" key={index}>
                                <div className="header__links">
                                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'header__nav-active' : ''}>{item.display}</NavLink>
                                </div>
                            </li>
                        ))
                }
            </div>
            <motion.div whileTap={{scale: 1.2}} className="header__shop">
                <span className='header__shop-icons'>
                    <Link to='shoping-card'>
                        <AiOutlineShoppingCart className='header__shop-icon'/>
                    </Link>
                    <div className="header__badge ">
                        {quantity}
                    </div>
                </span>
            </motion.div>
        </header>
    )
}

export default Header;