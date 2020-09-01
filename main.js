//cardápio do foodcamp
var pratos = [
    {img: "img/baiao.jpg",
    prato: "baião de dois", 
    descricao: "feijão de corda e arroz, acompanhando de carne de sol e queijo", 
    preço: "18,90"},

    {img: "img/moqueca.jpg",
    prato: "moqueca de banana da terra", 
    descricao: "tradicional moqueca baiana na versão vegana", 
    preço: "16,90"},

    {img: "img/tainha.jpg",
    prato: "tainha na taquara", 
    descricao: "tainha acompanhada de pirão e farofa de castanha do Brasil", 
    preço: "21,90"}
];

var bebidas = [
    {img: "img/coca.jpg",
    bebida: "coquinha gelada", 
    descricao: "lata 350ml", 
    preço: "5,00"},

    {img: "img/cocaZ.jpg",
    bebida: "coquinha gelada zero", 
    descricao: "lata 350ml", 
    preço: "5,00"},

    {img: "img/pepsi.jpg",
    bebida: "pepsi, pode ser?", 
    descricao: "lata 350ml", 
    preço: "6,00"},

    {img: "img/pepsiZ.jpg",
    bebida: "pepsi zero", 
    descricao: "lata 350ml", 
    preço: "6,00"},

    {img: "img/pepsiTwist.jpg",
    bebida: "pepsi twsti", 
    descricao: "lata 350ml", 
    preço: "5,00"}
];

var sobremesa = [
    {img: "img/pudim.jpg",
    bebida: "pudim", 
    descricao: "pudim de leite condensado", 
    preço: "4,00"},

    {img: "img/tiramisu.jpg",
    bebida: "tiramisù", 
    descricao: "sobremesa de creme de chocolate e café", 
    preço: "7,00"},

    {img: "img/tortinha.jpg",
    bebida: "torta de limão", 
    descricao: "clássica torta de limão francesa", 
    preço: "8,00"}
];
//console.log(pratos[0].img);

//inserir pratos no menu
var sectionPratos = document.querySelector('.prato ul');

function inserePratos(){

    for (prato of pratos){
        var pos = pratos.indexOf(prato);
        var i = 0;
        var loop = pratos.length + 1;
        console.log(loop);

        while(i < loop){
            var pratoElement = document.createElement("li");

            //foto do prato
            var imgPrato = document.createElement("img");
            imgPrato.setAttribute("src", pratos[i].img);
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
            var textPreco = document.createTextNode(pratos[i].preço);
            precoPrato.appendChild(textPreco);
            pratoElement.appendChild(precoPrato);

            sectionPratos.appendChild(pratoElement);
            i++;
        }
    }
};
inserePratos();

//inserir bebidas no menu


//inserir sobremesas no menu