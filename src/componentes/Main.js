import React, {useState} from 'react';
import Dish from './Dish';
import menu from './restaurantMenu';

export default function Main(){
    var [products,setQuantity] = useState(menu);

    function incrementQuantity(clickedProduct){
        clickedProduct.quantity += 1;
        setQuantity({...products});
    }
    function decrementQuantity(clickedProduct){
        (clickedProduct.quantity === 0) ? (clickedProduct.quantity = 1) :(clickedProduct.quantity -= 1);
        setQuantity({...products});
    }

    return (
        <main>
            <SectionProducts className='plates' titleSection='Primeiro, seu prato' items={menu.plates} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
            <SectionProducts className='beverages' titleSection='Agora, sua bebida' items={menu.beverages} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
            <SectionProducts className='desserts' titleSection='Por fim, sua sobremesa' items={menu.desserts} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
        </main>
    )
}

function SectionProducts(props){
    var {className,titleSection,items,decrementQuantity,incrementQuantity} = props;
    return (
        <section className={className}>
            <h2>{titleSection}</h2>
            <ul>
                {items.map((p,i) => 
                    <Dish product={p} key={i} onclickPlus={incrementQuantity} onclickMinus={decrementQuantity} />
                )}
            </ul>
        </section>
    )
}


// function activateButton(){
//     var orderPlates = document.querySelectorAll('.plates .selected');
//     var orderBeverages = document.querySelectorAll('.beverages .selected');
//     var orderDesserts = document.querySelectorAll('.desserts .selected');

//     var numberOfItemsInCategories = (orderPlates.length) && (orderBeverages.length) && (orderDesserts.length);
//     console.log(numberOfItemsInCategories)

//     if(numberOfItemsInCategories){
//         changeStyleButton();
//     };
// };