// pratoElement.setAttribute('onclick', 'selecao(pratos, ' + i +')');

import React from 'react';

export default function Dish(props){
    var {dish,src,description,price} = props;
    return (
        <li>
            <img src={src} alt={dish}/>
            <h3>{dish}</h3>
            <p>{description}</p>
            <h5>R$ {price}</h5>
        </li>
    )
}
