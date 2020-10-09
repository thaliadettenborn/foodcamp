import React from 'react';
import {Link} from 'react-router-dom';
import {order} from './Menu'

export default function ReviewScreen() {
    return (
        <div className='reviewBox'>
            <h2>Revise seu pedido</h2>
            <Aside />
        </div>
    )
}

function Aside(){
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

function Order(props){
    var {quantity,dish,partialCost} = props;
    return (
        <div>
            <span>{quantity}x {dish}</span>
            <span>{partialCost.toString().replace('.',',')}</span>
        </div>
    )
}

function Total(props){
    return(
        <div className='total'>
            <span>Total:</span>
            <span>{`R$ ${props.value.toString().replace('.',',')}`}</span>
        </div>
    )
}