import { Link } from 'react-router-dom';

import '../../styles/product-list.scss';

import image from '../../assets/image/items-img/aromistico-coffee.jpg';

const ProductList = ({id, name, country, price}) => {

    

    return (
        <>
            <div className="product__block">
                <img src={image} alt="" className='product__img' />
                <Link to={`/shop/${id}`} className='product__link'>
                    <div className="product__title">
                        {name}
                    </div>
                </Link>
                <div className="product__country">
                    {country}
                </div>
                <div className="product__price">
                    {`${price}$`}
                </div>
            </div>
        </>
    )
}

export default ProductList;