let contadorDePedidos = null;

let refeicao = null;
let custoRefeicao = null;

let acompanhamento = null;
let custoAcompanhamento = null;

let doce = null;
let custoDoce = null;

function escolherPrato(elemento, nomeSite, valor){
    let selecionado = document.querySelector(".prato .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
        contadorDePedidos = contadorDePedidos - 1;
        
    }
    elemento.classList.add("selecionado");
    contadorDePedidos = contadorDePedidos + 1;
   
    liberarBotao();
   
    refeicao = nomeSite;
   
    custoRefeicao = valor;
    
}

function escolherBebida(elemento, nomeSite, valor){
    let selecionado = document.querySelector(".bebida .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
        contadorDePedidos = contadorDePedidos - 1;
        
    }
    elemento.classList.add("selecionado");
    contadorDePedidos = contadorDePedidos + 1;
 
    liberarBotao();
   
    acompanhamento = nomeSite;
    custoAcompanhamento = valor;
   
}

function escolherSobremesa(elemento, nomeSite, valor){
    let selecionado = document.querySelector(".sobremesa .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
        contadorDePedidos = contadorDePedidos - 1;
    }
    elemento.classList.add("selecionado");
    contadorDePedidos = contadorDePedidos + 1;
    liberarBotao();
   
    doce = nomeSite;
    custoDoce = valor;
}

function liberarBotao(){
    let botao = document.querySelector("button");
    if(contadorDePedidos === 3){
        botao.disabled = false;
        botao.innerHtml = "Fechar Pedido";
        botao.classList.add("cor-de-fundo");

    } else {
        botao.disabled= true;
        botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
        botao.classList.remove("cor-de-fundo");
    }
}
function funcaoChamadora(){
    let mensagem = enviarPedido();
    window.open(mensagem,'_blank');
}

function enviarPedido(){
    let total = (custoRefeicao + custoAcompanhamento + custoDoce).toFixed(2);
    let pedido = `Olá, gostaria de fazer o pedido:
    - Prato: ${refeicao}
    - Bebida: ${acompanhamento}
    - Sobremesa: ${doce}
    Total: R$ ${total}`

    pedido = encodeURIComponent(pedido);
    return `https://wa.me/5521987110602?text=${pedido}`
}







