//---------------------------------------------------------------função para ativação do botão quando seleciona 3 itens
function ativarBotao (){
    var combo = document.querySelectorAll('.selecionado');
    combo = combo.length;

    if(combo === 3){
        mudaEstiloBotao();
    };
};


//--------------------------------------------------------------------------------------função de confirmação do pedido
function confirmaPedido(){
    ativarJanelaConfirmacao();

    var arrayPedido = pegaNomeEPreço();
    var dados = pedirNomeEndereco();

    var mensagem = mensagemFinal(arrayPedido,dados);
    
    inserirLinkWhats(mensagem);
};


//-----------------------------------------------------------------função que criar a mensagem final e converte para URI
function mensagemFinal(arrayPedido,dados){
    var prato = "- Prato: " + arrayPedido[0] + "\n";
    var bebida = "- Bebida: " + arrayPedido[1] + "\n";
    var sobremesa = "- Sobremesa: " + arrayPedido[2] + "\n";
    var total = "Total: R$ " + arrayPedido[3] + "\n\n";

    var nomeCliente = "Nome: " + dados[0] + "\n";
    var enderecoCliente = "Endereço de entrega: " + dados[1];

    var textmensagem = "Olá, gostaria de fazer o pedido:\n"

    var mensagemWhats = textmensagem + prato + bebida + sobremesa + total + nomeCliente + enderecoCliente;
    return encodeURIComponent(mensagemWhats);
}


//---------------------------------------------------------------------função que insere o link do whats no botão .pedir
function inserirLinkWhats(mensagem){
    var linkFazerPedido = criarLinkWhats(mensagem);
    
    var btnPedir = document.querySelector('.pedir a');
    btnPedir.setAttribute('href', linkFazerPedido);
};



//------------------------------------------------------------função cria o link do whats app para falar com o restaurante
function criarLinkWhats(mensagem){
    var inicioLink = "https://api.whatsapp.com/send?phone=";
    var telRestaurante = "5551986442061";
    var fimLink = "&text=" + mensagem;

    return inicioLink + telRestaurante + fimLink;
}



//---------------------------------------------------função pega o nome e o preço dos itens pedidos e insere em uma array
function pegaNomeEPreço(){
    var itensNome = document.querySelectorAll('.selecionado h3');
    var itensPreço = document.querySelectorAll('.selecionado h5');

    var pratoNome = itensNome[0].innerText;
    var pratoPreco = itensPreço[0].innerText;
    insereItemCombo(pratoNome, pratoPreco);

    var bebidaNome = itensNome[1].innerText;
    var bebidaPreco = itensPreço[1].innerText;
    insereItemCombo(bebidaNome, bebidaPreco);

    var sobremesaNome = itensNome[2].innerText;
    var sobremesaPreco = itensPreço[2].innerText;
    insereItemCombo(sobremesaNome, sobremesaPreco);

    valor1 = converteNumber(pratoPreco);
    valor2 = converteNumber(bebidaPreco);
    valor3 = converteNumber(sobremesaPreco);

    var total = calculaTotal(valor1,valor2,valor3);

    return [pratoNome,bebidaNome,sobremesaNome,total];
};



//---------------------------------------------------inserção dos itens do pedido e o preço total na janela de confirmação
function insereItemCombo(span1, span2){
    var pedido = document.querySelector('.pedido');

    //criando as linhas com nome e preço do item na janela de confirmação
    var itemCombo = document.createElement('div');

    //insere o nome
    var nome = document.createElement('span');
    nome.innerText = span1;
    itemCombo.appendChild(nome);

    //insere o preço
    var preco = document.createElement('span');
    preco.innerText = span2;
    itemCombo.appendChild(preco);

    //insere a div
    pedido.appendChild(itemCombo);
};

function inserePrecoTotal(totalPedido){
    var pedido = document.querySelector('.pedido');

    //criando a linha de total na janela
    var total = document.createElement('div');
    total.setAttribute('class','total');

    //inserindo span com o nome da linha
    var nome = document.createElement('span');
    nome.innerText = "total";
    total.appendChild(nome);

    //inserindo o valor total
    var preco = document.createElement('span');
    preco.innerText = "R$ "+ totalPedido;
    total.appendChild(preco);

    //inserindo informações na linha
    pedido.appendChild(total);
}



//-----------------------------------------------------------------------convertendo o preço de string para number
function converteNumber(valor){
    valor = valor.substr(3);
    return parseFloat(valor);
};

//-------------------------------------------------------------------------------calculando o valor total do pedido
function calculaTotal(valor1,valor2,valor3){
    var totalPedido = valor1 + valor2 + valor3;
    totalPedido = totalPedido.toFixed(2);
    inserePrecoTotal(totalPedido);
    return totalPedido;
};

//-----------------------------------------------------------------------------pedindo o nome e endereço do cliente
function pedirNomeEndereco(){
    var nome = prompt("Qual o seu nome?");
    var endereço = prompt("Qual o endereço de entrega?");
    return [nome,endereço];
}

//------------------------------função para mudar o estilo do botão ativado
function mudaEstiloBotao(){
    var botaoAtivado = document.querySelector('footer button');
    botaoAtivado.removeAttribute('disabled');
    botaoAtivado.innerText = "Fechar pedido";
    botaoAtivado.style.background = "#32B72F";
    botaoAtivado.style.padding = "15px";
    botaoAtivado.style.fontWeight = "bold";
    botaoAtivado.setAttribute('onclick','confirmaPedido()');
};

//--------------------------------função que ativa a janela de confirmação dos pedidos
function ativarJanelaConfirmacao(){
    var janelaConfirmacao = document.querySelector('.janelaConfirmacao');
    janelaConfirmacao.style.display = "flex";
};