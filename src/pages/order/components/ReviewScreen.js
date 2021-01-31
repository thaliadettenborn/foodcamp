import React from 'react';
import Header from '../../../components/Header';
import Aside from '../Aside';

export default function ReviewScreen() {
    return (
        <div>
            <Header />
            <div className='reviewBox'>
                <h2>Revise seu pedido</h2>
                <Aside />
            </div>
        </div>
    )
}