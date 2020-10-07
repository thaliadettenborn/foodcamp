import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { changeStyleButton } from './Footer';

export default function Dish(props){
    var {dish,src,description,price,key} = props;
    var [selected,setSelection] = useState(false);
    var [amount,setAmount] = useState(1);

    if(amount === 0){
        setAmount(1)
        setSelection(false)
    }
    (selected) && (setTimeout(activateButton,0));

    return (
        <li 
            data-name={dish}
            data-price={price}
            data-amount={amount}
            className={selected && "selected"}
            onClick={() => setSelection(true)}
        >
            <img src={src} alt={dish}/>
            <h3>{dish}</h3>
            <p>{description}</p>
            <h5>R$ {price}</h5>
            <div className='count'>
                <span className='red' onClick={() => setAmount(amount - 1)}>
                    <FontAwesomeIcon icon={faMinus} />
                </span>
                <span className='numberDish'>{amount}</span>
                <span className='green' onClick={() => setAmount(amount + 1)}>
                    <FontAwesomeIcon icon={faPlus} />
                </span>
            </div>
        </li>
    )
}

function activateButton(){
    var orderPlates = document.querySelectorAll('.plates .selected');
    var orderBeverages = document.querySelectorAll('.beverages .selected');
    var orderDesserts = document.querySelectorAll('.desserts .selected');

    var numberOfItemsInCategories = (orderPlates.length) && (orderBeverages.length) && (orderDesserts.length);
    console.log(numberOfItemsInCategories)

    if(numberOfItemsInCategories){
        changeStyleButton();
    };
};