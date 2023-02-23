import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import OurCoffee from '../pages/OurCoffee';
import About from '../pages/About';
import CoffeeItem from '../pages/CoffeeItem';
import ShopingCard from '../pages/ShopingCard';
import Checkout from '../pages/Checkout';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home'/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='shop' element={<OurCoffee/>}/>
                <Route path='shop/:id' element={<CoffeeItem/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='shoping-card' element={<ShopingCard/>}/>
                <Route path='checkout' element={<Checkout/>}/>
        </Routes>
    )
}   

export default Routers;