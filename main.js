//cardápio do foodcamp
var pratos = [
    {link: "img/baiao.jpg",
    prato: "baião de dois", 
    descricao: "feijão de corda e arroz, acompanhando de carne de sol e queijo", 
    preço: "18,90"},

    {link: "img/moqueca.jpg",
    prato: "moqueca de banana da terra", 
    descricao: "tradicional moqueca baiana na versão vegana", 
    preço: "16,90"},

    {link: "img/tainha.jpg",
    prato: "tainha na taquara", 
    descricao: "tainha acompanhada de pirão e farofa de castanha do Brasil", 
    preço: "21,90"}
];

var bebidas = [
    {link: "img/coca.jpg",
    bebida: "coquinha gelada", 
    descricao: "lata 350ml", 
    preço: "5,00"},

    {link: "img/cocaZ.jpg",
    bebida: "coquinha gelada zero", 
    descricao: "lata 350ml", 
    preço: "5,00"},

    {link: "img/pepsi.jpg",
    bebida: "pepsi, pode ser?", 
    descricao: "lata 350ml", 
    preço: "6,00"},

    {link: "img/pepsiZ.jpg",
    bebida: "pepsi zero, pode ser?", 
    descricao: "lata 350ml", 
    preço: "6,00"},

    {link: "img/pepsiTwist.jpg",
    bebida: "pepsi twist, pode ser?", 
    descricao: "lata 350ml", 
    preço: "5,00"}
];

var sobremesas = [
    {link: "img/pudim.jpg",
    prato: "pudim", 
    descricao: "pudim de leite condensado", 
    preço: "4,00"},

    {link: "img/tiramisu.jpg",
    prato: "tiramisù", 
    descricao: "sobremesa de creme de chocolate e café", 
    preço: "7,00"},

    {link: "img/tortinha.jpg",
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

    sectionPratos.appendChild(pratoElement);
    i++;
};

//inserir bebidas no menu
var j = 0;
var loop2 = bebidas.length;
var sectionBebida = document.querySelector('.bebida ul');

while(j < loop2){
    var bebidaElement = document.createElement("li");

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

    sectionBebida.appendChild(bebidaElement);
    j++;
};

//inserir sobremesas no menu
var k = 0;
var loop3 = sobremesas.length;
var sectionSobremesa = document.querySelector('.sobremesa ul');

while(k < loop3){
    var sobremesaElement = document.createElement("li");

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

    sectionSobremesa.appendChild(sobremesaElement);
    k++;
};

