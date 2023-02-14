import { NavLink } from "react-router-dom";

import logo from '../../assets/icons/black-logo.svg';

import '../../styles/blackHeader.scss';

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

const BlackHeader = () => {

    return (
        <header className='blackheader'>
            <div className="blackheader__menu">
                <div className="blackheader__logo">
                    <img src={logo} alt="logo" />
                </div>
                {
                    nav__links.map((item, index) => (
                            <li className="blackheader__nav" key={index}>
                                <div className="blackheader__links">

                                    <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'blackheader__nav-active' : ''}>{item.display}</NavLink>
                                </div>
                            </li>
                        ))
                }
                
            </div>
        </header>
    )
}

export default BlackHeader;