import CommonSection from "../components/UI/CommonSection";
import Beans from "../components/UI/Beans";

import coffe from '../assets/image/img/about-coffeee.jpg'

import '../styles/coffee-item.scss';

const CoffeeItem = () => {
    return (
        <>
            <CommonSection title='Our Coffee'/>
        
            <section className="coffee">
                <img src={coffe} alt="coffee" className="coffee__img" />
                
                <div className="coffee__descr">
                    <h2 className="title-pt-0">About it</h2>
                    <Beans/>
                    <div className="coffee__country">
                        <div className="coffee__country-title">
                            Country:
                        </div>
                        <div className="coffee__country-name">
                            Brazil
                        </div>
                    </div>
                    <div className="coffee__description">
                        <div className="coffee__description-value">
                        <b>Description:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div className="coffee__price">
                        <div className="coffee__price-title">
                            Price:
                        </div>
                        <div className="coffee__price-value">
                            16.99$
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CoffeeItem;