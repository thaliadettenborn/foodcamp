import React, {useState} from 'react';

export default function Dish(props){
    var {dish,src,description,price} = props;
    var [selected,setSelection] = useState(false);

    return (
        <li 
            className={selected && "selected"}
            onClick={() => setSelection(true)}
        >
            <img src={src} alt={dish}/>
            <h3>{dish}</h3>
            <p>{description}</p>
            <h5>R$ {price}</h5>
        </li>
    )
}

function 