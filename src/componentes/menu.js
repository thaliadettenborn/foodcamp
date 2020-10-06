function inserirPratos(){
    var i = 0;
    var loop = pratos.length;
    var sectionPratos = document.querySelector('.prato ul');

    while(i < loop){
        var pratoElement = document.createElement("li");

        //-----------------------------------------------------------id do prato
        pratoElement.setAttribute('id', pratos[i].id);

        //-----------------------------------------------------------foto do prato
        var imgPrato = document.createElement("img");
        imgPrato.setAttribute("src", pratos[i].link);
        pratoElement.appendChild(imgPrato);

        //-----------------------------------------------------------nome do prato
        var tituloPrato = document.createElement("h3");
        var nomePrato = document.createTextNode(pratos[i].prato);
        tituloPrato.appendChild(nomePrato);
        pratoElement.appendChild(tituloPrato);

        //-----------------------------------------------------------descrição do prato
        var descricaoPrato = document.createElement("p");
        var textDescricao = document.createTextNode(pratos[i].descricao);
        descricaoPrato.appendChild(textDescricao);
        pratoElement.appendChild(descricaoPrato);

        //-----------------------------------------------------------preço do prato
        var precoPrato = document.createElement("h5");
        var textPreco = document.createTextNode("R$ " + pratos[i].preço);
        precoPrato.appendChild(textPreco);
        pratoElement.appendChild(precoPrato);

        //-----------------------------------------------------------icone de check
        var iconeCheck = document.createElement('ion-icon');
        iconeCheck.setAttribute('name','checkmark-circle');
        iconeCheck.setAttribute('class','iconeCheck');
        pratoElement.appendChild(iconeCheck);

        //-----------------------------------------------------------adicionando função seleção do item li
        pratoElement.setAttribute('onclick', 'selecao(pratos, ' + i +')');

        sectionPratos.appendChild(pratoElement);
        i++;
    };
};

function inserirBebidas(){
    var i = 0;
    var loop = bebidas.length;
    var sectionBebida = document.querySelector('.bebida ul');

    while(i < loop){
        var bebidaElement = document.createElement("li");

        //-----------------------------------------------------------id da bebida
        bebidaElement.setAttribute('id', bebidas[i].id);

        //-----------------------------------------------------------foto da bebida
        var imgBebida = document.createElement("img");
        imgBebida.setAttribute("src", bebidas[i].link);
        bebidaElement.appendChild(imgBebida);

        //-----------------------------------------------------------nome da bebida
        var tituloBebida = document.createElement("h3");
        var nomeBebida = document.createTextNode(bebidas[i].prato);
        tituloBebida.appendChild(nomeBebida);
        bebidaElement.appendChild(tituloBebida);

        //-----------------------------------------------------------descrição da bebida
        var descricaoBebida = document.createElement("p");
        var textBebDescricao = document.createTextNode(bebidas[i].descricao);
        descricaoBebida.appendChild(textBebDescricao);
        bebidaElement.appendChild(descricaoBebida);

        //-----------------------------------------------------------preço da bebida
        var precoBebida = document.createElement("h5");
        var textPrecoBebida = document.createTextNode("R$ " + bebidas[i].preço);
        precoBebida.appendChild(textPrecoBebida);
        bebidaElement.appendChild(precoBebida);

        //-----------------------------------------------------------icone de check
        var iconeCheck = document.createElement('ion-icon');
        iconeCheck.setAttribute('name','checkmark-circle');
        iconeCheck.setAttribute('class','iconeCheck');
        bebidaElement.appendChild(iconeCheck);

        //-----------------------------------------------------------adicionando função seleção do item li
        bebidaElement.setAttribute('onclick', 'selecao(bebidas, ' + i +')');

        sectionBebida.appendChild(bebidaElement);
        i++;
    };
};


function inserirSobremesas(){
    var i = 0;
    var loop = sobremesas.length;
    var sectionSobremesa = document.querySelector('.sobremesa ul');

    while(i < loop){
        var sobremesaElement = document.createElement("li");

        //-----------------------------------------------------------id da bebida
        sobremesaElement.setAttribute('id', sobremesas[i].id);

        //-----------------------------------------------------------foto da sobremesa
        var imgSobremesa = document.createElement("img");
        imgSobremesa.setAttribute("src", sobremesas[i].link);
        sobremesaElement.appendChild(imgSobremesa);

        //-----------------------------------------------------------nome da sobremesa
        var tituloSobremesa = document.createElement("h3");
        var nomeSobremesa = document.createTextNode(sobremesas[i].prato);
        tituloSobremesa.appendChild(nomeSobremesa);
        sobremesaElement.appendChild(tituloSobremesa);

        //-----------------------------------------------------------descrição da sobremesa
        var descricaoSobremesa = document.createElement("p");
        var textSobremesaDescricao = document.createTextNode(sobremesas[i].descricao);
        descricaoSobremesa.appendChild(textSobremesaDescricao);
        sobremesaElement.appendChild(descricaoSobremesa);

        //-----------------------------------------------------------preço da sobremesa
        var precoSobremesa = document.createElement("h5");
        var textPrecoSobremesa = document.createTextNode("R$ " + sobremesas[i].preço);
        precoSobremesa.appendChild(textPrecoSobremesa);
        sobremesaElement.appendChild(precoSobremesa);

        //-----------------------------------------------------------icone de check
        var iconeCheck = document.createElement('ion-icon');
        iconeCheck.setAttribute('name','checkmark-circle');
        iconeCheck.setAttribute('class','iconeCheck');
        sobremesaElement.appendChild(iconeCheck);

        //-----------------------------------------------------------adicionando função seleção do item li
        sobremesaElement.setAttribute('onclick', 'selecao(sobremesas, ' + i +')');
        sectionSobremesa.appendChild(sobremesaElement);
        i++;
    };
};
