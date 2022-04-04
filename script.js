let contadorDePedidos = null;

let refeicao = null;
let custoRefeicao = null;

let acompanhamento = null;
let custoAcompanhamento = null;

let doce = null;
let custoDoce = null;

let total = custoRefeicao + custoAcompanhamento + custoDoce;
let valorTotal = total.toFixed(2);

function escolherPrato(elemento, nomeSite, valor){
    let selecionado = document.querySelector(".prato .selecionado");
    if(selecionado !== null){
        selecionado.classList.remove("selecionado");
        contadorDePedidos = contadorDePedidos - 1;
    }
    elemento.classList.add("selecionado");
    contadorDePedidos = contadorDePedidos + 1;
   
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
   
    doce = nomeSite;
    custoDoce = valor;
}

function liberarBotao(){
    let botao = document.querySelector("button");
    if(contadorDePedidos === 3){
       botao.classList.add("cor-de-fundo");
       botao.disabled = false;
       botao.innerHtml = "Fechar Pedido";

    } else {
        botao.disabled= true;
        botao.innerHTML = "Selecione os 3 itens para fechar o pedido";
        botao.classList.remove("cor-de-fundo");
    }
}
//encodeURIComponent(`https://wa.me/5521987110602?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%20-%20Prato:%20${refeicao}%20-%20Bebida:%20${acompanhamento}%20-%20Sobremesa:%20${doce}%20Total:%20RS%20${total}`)


