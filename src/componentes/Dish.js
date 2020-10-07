import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Dish(props){
    var {dish,src,description,price} = props;
    var [selected,setSelection] = useState(false);
    var [amount,setAmount] = useState(1);

    if(amount === 0){
        amount = 1;
        selected = false;
    }

    return (
        <li 
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
                <span>{amount}</span>
                <span className='green' onClick={() => setAmount(amount + 1)}>
                    <FontAwesomeIcon icon={faPlus} />
                </span>
            </div>
        </li>
    )
}