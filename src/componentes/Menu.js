import React, {useState} from 'react';
import Dish from './Dish';
import menu from './restaurantMenu';

var order = {};

export default function Menu(props){
    var [products,setQuantity] = useState(menu);

    function incrementQuantity(clickedProduct){
        clickedProduct.quantity += 1;
        setQuantity({...products});
        activateButton(products,props.changeStateButton);
    }
    function decrementQuantity(clickedProduct){
        (clickedProduct.quantity === 0) ? (clickedProduct.quantity = 1) :(clickedProduct.quantity -= 1);
        setQuantity({...products});
        activateButton(products,props.changeStateButton);
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

function activateButton(products,changeStateButtonToActive){
    var {plates,beverages,desserts} = products;
    var chosenDishes = plates.filter(d => d.quantity);
    var chosenBeverages = beverages.filter(b => b.quantity);
    var chosenDesserts= desserts.filter(d => d.quantity);

    var setUpTheOrder = (chosenDishes.length > 0) && (chosenBeverages.length > 0) && (chosenDesserts.length > 0);

    if(setUpTheOrder){
        changeStateButtonToActive()
        assembleOrder(chosenDishes,chosenBeverages,chosenDesserts)
    }
}

function assembleOrder(dishes,beverages,desserts){
    dishes = calculatPartialCost(dishes);
    beverages = calculatPartialCost(beverages);
    desserts = calculatPartialCost(desserts);
    var totalCost = calculateTotalCost([...dishes,...beverages,...desserts]);

    order.products = [...dishes,...beverages,...desserts];
    messageToRestaurant(dishes,beverages,desserts,totalCost);
}

function messageToRestaurant(dishes,beverages,desserts,totalCost){
    var dishesOrdered = dishes.map(element => `${element.quantity}x ${element.dish}`);
    var beveragesOrdered = beverages.map(element => `${element.quantity}x ${element.dish}`);
    var dessertsOrdered = desserts.map(element => `${element.quantity}x ${element.dish}`);

    var message = `
        Olá, gostaria de fazer o pedido:\n
        - Prato: ${dishesOrdered}\n
        - Bebida: ${beveragesOrdered}\n
        - Sobremesa: ${dessertsOrdered}\n\n
        Total: R$ ${totalCost}
    `;
    order.linkWhats = `https://api.whatsapp.com/send?phone=5551986442061&text=${encodeURIComponent(message)}`
}

function calculatPartialCost(item){
    return item.map(element => {
        var {dish,price,quantity} = element;
        price = convertToNumber(price);
        var partialCost = price * quantity;
        return {quantity,dish,partialCost}
    })
}

function calculateTotalCost(products){
    var total = 0;
    products.forEach(item => {
        total += item.partialCost;
    })
    return total;
}

function convertToNumber(string){
    return parseFloat(string.replace(',','.'))
}