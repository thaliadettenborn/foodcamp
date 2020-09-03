//cardápio do foodcamp
var pratos = [
    {id: "p1",
    link: "img/baiao.jpg",
    prato: "baião de dois", 
    descricao: "feijão de corda e arroz, acompanhando de carne de sol e queijo", 
    preço: "19,00"},

    {id: "p2",
    link: "img/moqueca.jpg",
    prato: "moqueca de banana da terra", 
    descricao: "tradicional moqueca baiana na versão vegana", 
    preço: "17,00"},

    {id: "p3",
    link: "img/tainha.jpg",
    prato: "tainha na taquara", 
    descricao: "tainha acompanhada de pirão e farofa de castanha do Brasil", 
    preço: "22,00"}
];

var bebidas = [
    {id: "b1",
    link: "img/coca.jpg",
    bebida: "coquinha gelada", 
    descricao: "lata 350ml", 
    preço: "5,00"},

    {id: "b2",
    link: "img/cocaZ.jpg",
    bebida: "coquinha gelada zero", 
    descricao: "lata 350ml", 
    preço: "5,00"},

    {id: "b3",
    link: "img/pepsi.jpg",
    bebida: "pepsi, pode ser?", 
    descricao: "lata 350ml", 
    preço: "6,00"},

    {id: "b4",
    link: "img/pepsiZ.jpg",
    bebida: "pepsi zero, pode ser?", 
    descricao: "lata 350ml", 
    preço: "6,00"},

    {id: "b5",
    link: "img/pepsiTwist.jpg",
    bebida: "pepsi twist, pode ser?", 
    descricao: "lata 350ml", 
    preço: "5,00"}
];

var sobremesas = [
    {id: "s1",
    link: "img/pudim.jpg",
    prato: "pudim", 
    descricao: "pudim de leite condensado", 
    preço: "4,00"},

    {id: "s2",
    link: "img/tiramisu.jpg",
    prato: "tiramisù", 
    descricao: "sobremesa de creme de chocolate e café", 
    preço: "7,00"},

    {id: "s3",
    link: "img/tortinha.jpg",
    prato: "torta de limão", 
    descricao: "clássica torta de limão francesa", 
    preço: "8,00"}
];


//inserir pratos no menu
var i = 0;
var loop1 = pratos.length;
var sectionPratos = document.querySelector('.prato ul');

while(i < loop1){
    var pratoElement = document.createElement("li");

    //id do prato
    pratoElement.setAttribute('id', pratos[i].id);

    //foto do prato
    var imgPrato = document.createElement("img");
    imgPrato.setAttribute("src", pratos[i].link);
    pratoElement.appendChild(imgPrato);
    //nome do prato
    var tituloPrato = document.createElement("h3");
    var nomePrato = document.createTextNode(pratos[i].prato);
    tituloPrato.appendChild(nomePrato);
    pratoElement.appendChild(tituloPrato);
    //descrição do prato
    var descricaoPrato = document.createElement("p");
    var textDescricao = document.createTextNode(pratos[i].descricao);
    descricaoPrato.appendChild(textDescricao);
    pratoElement.appendChild(descricaoPrato);
    //preço do prato
    var precoPrato = document.createElement("h5");
    var textPreco = document.createTextNode("R$ " + pratos[i].preço);
    precoPrato.appendChild(textPreco);
    pratoElement.appendChild(precoPrato);
    //icone de check
    var iconeCheck = document.createElement('ion-icon');
    iconeCheck.setAttribute('name','checkmark-circle');
    iconeCheck.setAttribute('class','iconeCheck');
    pratoElement.appendChild(iconeCheck);

    //adicionando função seleção do item li
    pratoElement.setAttribute('onclick', 'selecao(pratos, ' + i +')');

    sectionPratos.appendChild(pratoElement);
    i++;
};

//inserir bebidas no menu
var j = 0;
var loop2 = bebidas.length;
var sectionBebida = document.querySelector('.bebida ul');

while(j < loop2){
    var bebidaElement = document.createElement("li");

    //id da bebida
    bebidaElement.setAttribute('id', bebidas[j].id);

    //foto da bebida
    var imgBebida = document.createElement("img");
    imgBebida.setAttribute("src", bebidas[j].link);
    bebidaElement.appendChild(imgBebida);
    //nome da bebida
    var tituloBebida = document.createElement("h3");
    var nomeBebida = document.createTextNode(bebidas[j].bebida);
    tituloBebida.appendChild(nomeBebida);
    bebidaElement.appendChild(tituloBebida);
    //descrição da bebida
    var descricaoBebida = document.createElement("p");
    var textBebDescricao = document.createTextNode(bebidas[j].descricao);
    descricaoBebida.appendChild(textBebDescricao);
    bebidaElement.appendChild(descricaoBebida);
    //preço da bebida
    var precoBebida = document.createElement("h5");
    var textPrecoBebida = document.createTextNode("R$ " + bebidas[j].preço);
    precoBebida.appendChild(textPrecoBebida);
    bebidaElement.appendChild(precoBebida);
    //icone de check
    var iconeCheck = document.createElement('ion-icon');
    iconeCheck.setAttribute('name','checkmark-circle');
    iconeCheck.setAttribute('class','iconeCheck');
    bebidaElement.appendChild(iconeCheck);

    //adicionando função seleção do item li
    bebidaElement.setAttribute('onclick', 'selecao(bebidas, ' + j +')');

    sectionBebida.appendChild(bebidaElement);
    j++;
};

//inserir sobremesas no menu
var k = 0;
var loop3 = sobremesas.length;
var sectionSobremesa = document.querySelector('.sobremesa ul');

while(k < loop3){
    var sobremesaElement = document.createElement("li");

    //id da bebida
    sobremesaElement.setAttribute('id', sobremesas[k].id);

    //foto da sobremesa
    var imgSobremesa = document.createElement("img");
    imgSobremesa.setAttribute("src", sobremesas[k].link);
    sobremesaElement.appendChild(imgSobremesa);
    //nome da sobremesa
    var tituloSobremesa = document.createElement("h3");
    var nomeSobremesa = document.createTextNode(sobremesas[k].prato);
    tituloSobremesa.appendChild(nomeSobremesa);
    sobremesaElement.appendChild(tituloSobremesa);
    //descrição da sobremesa
    var descricaoSobremesa = document.createElement("p");
    var textSobremesaDescricao = document.createTextNode(sobremesas[k].descricao);
    descricaoSobremesa.appendChild(textSobremesaDescricao);
    sobremesaElement.appendChild(descricaoSobremesa);
    //preço da sobremesa
    var precoSobremesa = document.createElement("h5");
    var textPrecoSobremesa = document.createTextNode("R$ " + sobremesas[k].preço);
    precoSobremesa.appendChild(textPrecoSobremesa);
    sobremesaElement.appendChild(precoSobremesa);
    //icone de check
    var iconeCheck = document.createElement('ion-icon');
    iconeCheck.setAttribute('name','checkmark-circle');
    iconeCheck.setAttribute('class','iconeCheck');
    sobremesaElement.appendChild(iconeCheck);

    //adicionando função seleção do item li
    sobremesaElement.setAttribute('onclick', 'selecao(sobremesas, ' + k +')');
    sectionSobremesa.appendChild(sobremesaElement);
    k++;
};



//função de seleção do prato
function selecao(item, pos){
    var selecionado = item[pos];
    
    if(item[pos].id == "p1"){
        //prato 1 - ON
        var selecao = document.querySelector(".prato li:nth-child(1)");
        selecao.setAttribute('class','selecionado');
        //prato 2
        var selecao = document.querySelector(".prato li:nth-child(2)");
        selecao.removeAttribute('class');
        //prato 3
        var selecao = document.querySelector(".prato li:nth-child(3)");
        selecao.removeAttribute('class');

    } else if(item[pos].id == "p2"){
        //prato 1
        var selecao = document.querySelector(".prato li:nth-child(1)");
        selecao.removeAttribute('class');
        //prato 2 - ON
        var selecao = document.querySelector(".prato li:nth-child(2)");
        selecao.setAttribute('class','selecionado');
        //prato 3
        var selecao = document.querySelector(".prato li:nth-child(3)");
        selecao.removeAttribute('class');

    } else if(item[pos].id == "p3"){
        //prato 1
        var selecao = document.querySelector(".prato li:nth-child(1)");
        selecao.removeAttribute('class');
        //prato 2
        var selecao = document.querySelector(".prato li:nth-child(2)");
        selecao.removeAttribute('class');
        //prato 3 - ON
        var selecao = document.querySelector(".prato li:nth-child(3)");
        selecao.setAttribute('class','selecionado');

    }else if(item[pos].id == "b1"){
        //bebida 1 - ON
        var selecao = document.querySelector(".bebida li:nth-child(1)");
        selecao.setAttribute('class','selecionado');
        //bebida 2
        var selecao = document.querySelector(".bebida li:nth-child(2)");
        selecao.removeAttribute('class');
        //bebida 3
        var selecao = document.querySelector(".bebida li:nth-child(3)");
        selecao.removeAttribute('class');
        //bebida 4
        var selecao = document.querySelector(".bebida li:nth-child(4)");
        selecao.removeAttribute('class');
        //bebida 5
        var selecao = document.querySelector(".bebida li:nth-child(5)");
        selecao.removeAttribute('class');

    }else if(item[pos].id == "b2"){
        //bebida 1
        var selecao = document.querySelector(".bebida li:nth-child(1)");
        selecao.removeAttribute('class');
        //bebida 2 - ON
        var selecao = document.querySelector(".bebida li:nth-child(2)");
        selecao.setAttribute('class','selecionado');
        //bebida 3
        var selecao = document.querySelector(".bebida li:nth-child(3)");
        selecao.removeAttribute('class');
        //bebida 4
        var selecao = document.querySelector(".bebida li:nth-child(4)");
        selecao.removeAttribute('class');
        //bebida 5
        var selecao = document.querySelector(".bebida li:nth-child(5)");
        selecao.removeAttribute('class');

    }else if(item[pos].id == "b3"){
        //bebida 1
        var selecao = document.querySelector(".bebida li:nth-child(1)");
        selecao.removeAttribute('class');
        //bebida 2
        var selecao = document.querySelector(".bebida li:nth-child(2)");
        selecao.removeAttribute('class');
        //bebida 3 - ON
        var selecao = document.querySelector(".bebida li:nth-child(3)");
        selecao.setAttribute('class','selecionado');
        //bebida 4
        var selecao = document.querySelector(".bebida li:nth-child(4)");
        selecao.removeAttribute('class');
        //bebida 5
        var selecao = document.querySelector(".bebida li:nth-child(5)");
        selecao.removeAttribute('class');

    }else if(item[pos].id == "b4"){
        //bebida 1
        var selecao = document.querySelector(".bebida li:nth-child(1)");
        selecao.removeAttribute('class');
        //bebida 2
        var selecao = document.querySelector(".bebida li:nth-child(2)");
        selecao.removeAttribute('class');
        //bebida 3
        var selecao = document.querySelector(".bebida li:nth-child(3)");
        selecao.removeAttribute('class');
        //bebida 4 - ON
        var selecao = document.querySelector(".bebida li:nth-child(4)");
        selecao.setAttribute('class','selecionado');
        //bebida 5
        var selecao = document.querySelector(".bebida li:nth-child(5)");
        selecao.removeAttribute('class');

    }else if(item[pos].id == "b5"){
        //bebida 1
        var selecao = document.querySelector(".bebida li:nth-child(1)");
        selecao.removeAttribute('class');
        //bebida 2
        var selecao = document.querySelector(".bebida li:nth-child(2)");
        selecao.removeAttribute('class');
        //bebida 3
        var selecao = document.querySelector(".bebida li:nth-child(3)");
        selecao.removeAttribute('class');
        //bebida 4
        var selecao = document.querySelector(".bebida li:nth-child(4)");
        selecao.removeAttribute('class');
        //bebida 5 - ON
        var selecao = document.querySelector(".bebida li:nth-child(5)");
        selecao.setAttribute('class','selecionado');

    }else if(item[pos].id == "s1"){
        //sobremesa 1 - ON
        var selecao = document.querySelector(".sobremesa li:nth-child(1)");
        selecao.setAttribute('class','selecionado');
        //sobremesa 2
        var selecao = document.querySelector(".sobremesa li:nth-child(2)");
        selecao.removeAttribute('class');
        //sobremesa 2
        var selecao = document.querySelector(".sobremesa li:nth-child(3)");
        selecao.removeAttribute('class');

    }else if(item[pos].id == "s2"){
        //sobremesa 1
        var selecao = document.querySelector(".sobremesa li:nth-child(1)");
        selecao.removeAttribute('class');
        //sobremesa 2 - ON
        var selecao = document.querySelector(".sobremesa li:nth-child(2)");
        selecao.setAttribute('class','selecionado');
        //sobremesa 3
        var selecao = document.querySelector(".sobremesa li:nth-child(3)");
        selecao.removeAttribute('class');

    }else if(item[pos].id == "s3"){
        //sobremesa 1
        var selecao = document.querySelector(".sobremesa li:nth-child(1)");
        selecao.removeAttribute('class');
        //sobremesa 2
        var selecao = document.querySelector(".sobremesa li:nth-child(2)");
        selecao.removeAttribute('class');
        //sobremesa 3 - ON
        var selecao = document.querySelector(".sobremesa li:nth-child(3)");
        selecao.setAttribute('class','selecionado');
    }
    ativaBotao();
};

//botão é ativado quando seleciona 3 itens
function ativaBotao (){
    var combo = document.querySelectorAll('.selecionado');
    combo = combo.length;
    
    if(combo === 3){
        var botaoAtivado = document.querySelector('footer button');
        botaoAtivado.removeAttribute('disabled');
        botaoAtivado.innerText = "Fechar pedido";
        botaoAtivado.style.background = "#32B72F";
        botaoAtivado.style.padding = "15px";
        botaoAtivado.style.fontWeight = "bold";
        botaoAtivado.setAttribute('onclick','confirmaPedido()');
    }
};

//função de confirmação do pedido
function confirmaPedido(){
    var nome = prompt("Qual o seu nome?");
    var endereço = prompt("Qual o endereço de entrega?");
    
}