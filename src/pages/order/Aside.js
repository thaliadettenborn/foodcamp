import React from 'react';
import {Link} from 'react-router-dom';
import {order} from '../menu/Menu';
import Order from './components/Order';
import Total from './components/Total';

export default function Aside(){
    var {linkWhats,products,total} = order;
    return (
        <aside className="reviewScreen box-shadow">
            <article className='order'>
                {products.map((p,i) =>
                    <Order quantity={p.quantity} dish={p.dish} partialCost={p.partialCost} key={i} />
                )}
                <Total value={total}/>
            </article>
            <button className="request"><a href={linkWhats}>Tudo certo, pode pedir!</a></button>
            <button className="cancel">
                <Link to='/'>Cancelar</Link>
            </button>
        </aside>
    )
}