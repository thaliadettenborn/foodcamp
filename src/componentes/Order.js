import React from 'react';

export default function Order(props){
    var {quantity,dish,partialCost} = props;
    return (
        <div>
            <span>{quantity}x {dish}</span>
            <span>{partialCost.toString().replace('.',',')}</span>
        </div>
    )
}