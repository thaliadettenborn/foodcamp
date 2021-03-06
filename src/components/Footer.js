import React from 'react';
import {Link} from "react-router-dom";

export default function Footer(props){
    var {activedButton} = props;
    return (
        <footer className='box-shadow'>
            <button className={activedButton ? 'activated' : undefined}>
                <Link to={activedButton ? "/review-order" : undefined}>
                    <span>
                        {activedButton ? 'Revisar Pedido' : 'Selecione os 3 itens para fechar o pedido'}
                    </span>
                </Link>
            </button>
        </footer>
    )
}