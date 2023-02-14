import { NavLink } from "react-router-dom";

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
        </header>
    )
}

export default Header;