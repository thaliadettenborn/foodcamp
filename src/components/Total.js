import React from 'react';

export default function Total(props){
    return(
        <div className='total'>
            <span>Total:</span>
            <span>{`R$ ${props.value.toString().replace('.',',')}`}</span>
        </div>
    )
}