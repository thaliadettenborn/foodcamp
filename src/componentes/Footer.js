import React from 'react';

export default function Footer(){
    return (
        <footer>
            <button disabled>
                Selecione os 3 itens <br /> para fechar o pedido
            </button>
        </footer>
    )
}

export function changeStyleButton(){
    var buttonEnabled = document.querySelector('footer button');
    buttonEnabled.removeAttribute('disabled');
    buttonEnabled.innerText = "Fechar pedido";
    buttonEnabled.style.background = "#32B72F";
    buttonEnabled.style.padding = "15px";
    buttonEnabled.style.fontWeight = "bold";
    buttonEnabled.setAttribute('onclick','confirmaPedido()');
}