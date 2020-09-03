function main (){
    inserirPratos();
    inserirBebidas();
    inserirSobremesas();
}
main();


//botão é ativado quando seleciona 3 itens
function ativarBotao (){
    var combo = document.querySelectorAll('.selecionado');
    combo = combo.length;

    if(combo === 3){
        mudaEstiloBotao();
        pegaNomeEPreço();
    };
};

function mudaEstiloBotao(){
    var botaoAtivado = document.querySelector('footer button');
    botaoAtivado.removeAttribute('disabled');
    botaoAtivado.innerText = "Fechar pedido";
    botaoAtivado.style.background = "#32B72F";
    botaoAtivado.style.padding = "15px";
    botaoAtivado.style.fontWeight = "bold";
    botaoAtivado.setAttribute('onclick','confirmaPedido()');
};

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

    calculaTotal(valor1,valor2,valor3);
};


//inserção dos dados do pedido na janela de confirmação
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
    preco.innerText = totalPedido;
    total.appendChild(preco);

    //inserindo informações na linha
    pedido.appendChild(total);
}



//convertendo o preço de string para number
function converteNumber(valor){
    valor = valor.substr(4);
    return parseFloat(valor);
};

//calculando o valor total do pedido
function calculaTotal(valor1,valor2,valor3){
    var totalPedido = valor1 + valor2 + valor3;
    totalPedido = totalPedido.toFixed(2);
    inserePrecoTotal(totalPedido);
};

//função de confirmação do pedido
function confirmaPedido(){
    var nome = prompt("Qual o seu nome?");
    var endereço = prompt("Qual o endereço de entrega?");

    var janelaConfirmacao = document.querySelector('.janelaConfirmacao');
    janelaConfirmacao.style.display = "flex";
};


//função de seleção do prato
function selecao(item, pos){
    var selecionado = item[pos];
    
    //adiciona estilo ao item selecionado:
    if(item[pos].id == "p1")
        ativaPrato1();

    else if(item[pos].id == "p2")
        ativaPrato2();

    else if(item[pos].id == "p3")
        ativaPrato3();

    else if(item[pos].id == "b1")
        ativaBebida1();

    else if(item[pos].id == "b2")
        ativaBebida2();

    else if(item[pos].id == "b3")
        ativaBebida3();

    else if(item[pos].id == "b4")
        ativaBebida4();

    else if(item[pos].id == "b5")
        ativaBebida5();

    else if(item[pos].id == "s1")
        ativaSobremesa1();

    else if(item[pos].id == "s2")
        ativaSobremesa2();

    else if(item[pos].id == "s3")
        ativaSobremesa3();
    
    //quando selecionar 3 itens do combo vai ativar o botão
    ativarBotao();
};








//----------------------------------------ativação da seleção dos prato e desmarcação dos outros -------------
function ativaPrato1(){
    //prato 1 - ON
    var selecao = document.querySelector(".prato li:nth-child(1)");
    selecao.setAttribute('class','selecionado');
    //prato 2
    var selecao = document.querySelector(".prato li:nth-child(2)");
    selecao.removeAttribute('class');
    //prato 3
    var selecao = document.querySelector(".prato li:nth-child(3)");
    selecao.removeAttribute('class');
};

function ativaPrato2(){
    //prato 1
    var selecao = document.querySelector(".prato li:nth-child(1)");
    selecao.removeAttribute('class');
    //prato 2 - ON
    var selecao = document.querySelector(".prato li:nth-child(2)");
    selecao.setAttribute('class','selecionado');
    //prato 3
    var selecao = document.querySelector(".prato li:nth-child(3)");
    selecao.removeAttribute('class');
};

function ativaPrato3(){
    //prato 1
    var selecao = document.querySelector(".prato li:nth-child(1)");
    selecao.removeAttribute('class');
    //prato 2
    var selecao = document.querySelector(".prato li:nth-child(2)");
    selecao.removeAttribute('class');
    //prato 3 - ON
    var selecao = document.querySelector(".prato li:nth-child(3)");
    selecao.setAttribute('class','selecionado');
};




//----------------------------------------ativação da seleção das bebidas e desmarcação dos outros -------------
function ativaBebida1(){
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
};

function ativaBebida2(){
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
};

function ativaBebida3(){
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
};

function ativaBebida4(){
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
};

function ativaBebida5(){
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
};



//----------------------------------------ativação da seleção das sobremesas e desmarcação dos outros -------------
function ativaSobremesa1(){
    //sobremesa 1 - ON
    var selecao = document.querySelector(".sobremesa li:nth-child(1)");
    selecao.setAttribute('class','selecionado');
    //sobremesa 2
    var selecao = document.querySelector(".sobremesa li:nth-child(2)");
    selecao.removeAttribute('class');
    //sobremesa 2
    var selecao = document.querySelector(".sobremesa li:nth-child(3)");
    selecao.removeAttribute('class');
};

function ativaSobremesa2(){
    //sobremesa 1
    var selecao = document.querySelector(".sobremesa li:nth-child(1)");
    selecao.removeAttribute('class');
    //sobremesa 2 - ON
    var selecao = document.querySelector(".sobremesa li:nth-child(2)");
    selecao.setAttribute('class','selecionado');
    //sobremesa 3
    var selecao = document.querySelector(".sobremesa li:nth-child(3)");
    selecao.removeAttribute('class');
};

function ativaSobremesa3(){
    //sobremesa 1
    var selecao = document.querySelector(".sobremesa li:nth-child(1)");
    selecao.removeAttribute('class');
    //sobremesa 2
    var selecao = document.querySelector(".sobremesa li:nth-child(2)");
    selecao.removeAttribute('class');
    //sobremesa 3 - ON
    var selecao = document.querySelector(".sobremesa li:nth-child(3)");
    selecao.setAttribute('class','selecionado');
};
