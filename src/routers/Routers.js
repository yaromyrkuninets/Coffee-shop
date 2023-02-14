import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import OurCoffee from '../pages/OurCoffee';
import About from '../pages/About';
import CoffeeItem from '../pages/CoffeeItem';

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='home'/>}/>
                <Route path='home' element={<Home/>}/>
                <Route path='shop' element={<OurCoffee/>}/>
                <Route path='shop/:id' element={<CoffeeItem/>}/>
                <Route path='about' element={<About/>}/>
        </Routes>
    )
}   

export default Routers;