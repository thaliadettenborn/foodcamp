import React from 'react';

export default function Footer(props){
    var {activedButton,reviewOrder} = props;
    console.log(activedButton);
    return (
        <footer>
            <button className={activedButton && 'activated'} onClick={reviewOrder}>
                {activedButton ? 'Revisar Pedido' : 'Selecione os 3 itens para fechar o pedido'}
            </button>
        </footer>
    )
}