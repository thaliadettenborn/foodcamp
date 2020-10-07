import React from 'react';
import Dish from './Dish';
import menu from './restaurantMenu';

export default function Main(){
    return (
        <main>
            <Dishes />
            <Beverages />
            <Desserts />
        </main>
    )
}

// --------------------------------------------------------------------------------------- RENDER
var {plates,beverages,desserts} = menu;
function Dishes(){
    return (
        <section className="plates">
            <h2>Primeiro, seu prato</h2>
            <ul>
                {plates.map((d,i) =>
                    <Dish dish={d.dish} src={d.src} description={d.description} price={d.price} key={i}/>
                )}
            </ul>
        </section>
    )
}
function Beverages(){
    return (
        <section className="beverages">
            <h2>Agora, sua bebida</h2>
            <ul>
                {beverages.map((b,i) =>
                    <Dish dish={b.dish} src={b.src} description={b.description} price={b.price} key={i} />
                )}
            </ul>
        </section>
    )
}
function Desserts(){
    return (
        <section className="desserts">
            <h2>Agora, sua bebida</h2>
            <ul>
                {desserts.map((d,i) =>
                    <Dish dish={d.dish} src={d.src} description={d.description} price={d.price} key={i} />
                )}
            </ul>
        </section>
    )
}