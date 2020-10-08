import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Dish(props){
    var {product,onclickPlus,onclickMinus,key} = props;
    var {dish,src,description,price,quantity} = product;
    
    return (
        <div className={(quantity > 0) ? "container-product selected" : 'container-product'}>
            <li onClick={() => onclickPlus(product)}>
            <img src={src} alt={dish}/>
            <h3>{dish}</h3>
            <p>{description}</p>
            <h5>R$ {price}</h5>
            </li>

            <div className='count'>
                <span className='red' onClick={() => onclickMinus(product)}>
                    <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className='numberDish'>{quantity}</span>
                <span className='green' onClick={() => onclickPlus(product)}>
                    <FontAwesomeIcon icon={faPlus} />
                </span>
            </div>
        </div>
    )
}