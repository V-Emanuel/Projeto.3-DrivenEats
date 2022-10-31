let prato;
let bebida;
let sobremesa;
let preco_prato = 0;
let preco_bebida = 0;
let preco_sobremesa = 0;
let sel_prato = 0;
let sel_bebida = 0;
let sel_sobremesa = 0;
function escolhe_acaraje(){   

    document.getElementById("acaraje_id").style.borderColor = "#32B72F";
    document.getElementById("dadinho_id").style.borderColor = "white";
    document.getElementById("cuscuz_id").style.borderColor = "white";
    document.getElementById("img_acaraje").style.visibility = "visible";
    document.getElementById("img_dadinho").style.visibility = "hidden";
    document.getElementById("img_cuscuz").style.visibility = "hidden";
    prato = "Acarajé";
    preco_prato = 8.50;
    sel_prato = 1;
    fica_verde();
}
function escolhe_dadinho(){  

    document.getElementById("dadinho_id").style.borderColor = "#32B72F";
    document.getElementById("acaraje_id").style.borderColor = "white";
    document.getElementById("cuscuz_id").style.borderColor = "white";
    document.getElementById("img_acaraje").style.visibility = "hidden";
    document.getElementById("img_dadinho").style.visibility = "visible";
    document.getElementById("img_cuscuz").style.visibility = "hidden";
    prato = "Dadinho de Tapioca";
    preco_prato = 15.00;
    sel_prato = 1;
    fica_verde();
}
function escolhe_cuscuz(){    

    document.getElementById("cuscuz_id").style.borderColor = "#32B72F";
    document.getElementById("dadinho_id").style.borderColor = "white";
    document.getElementById("acaraje_id").style.borderColor = "white";
    document.getElementById("img_acaraje").style.visibility = "hidden";
    document.getElementById("img_dadinho").style.visibility = "hidden";
    document.getElementById("img_cuscuz").style.visibility = "visible";
    prato = "Cuscuz";
    preco_prato = 12.50;
    sel_prato = 1;
    fica_verde();
}

function escolhe_garapa(){    
    document.getElementById("garapa_id").style.borderColor = "#32B72F";
    document.getElementById("guarana_id").style.borderColor = "white";
    document.getElementById("suco_id").style.borderColor = "white";
    document.getElementById("img_garapa").style.visibility = "visible";
    document.getElementById("img_guarana").style.visibility = "hidden";
    document.getElementById("img_suco").style.visibility = "hidden";
    bebida = "Garapa";
    preco_bebida = 4.5;
    sel_bebida = 1;
    fica_verde();
}
function escolhe_guarana(){    
    document.getElementById("garapa_id").style.borderColor = "white";
    document.getElementById("guarana_id").style.borderColor = "#32B72F";
    document.getElementById("suco_id").style.borderColor = "white";
    document.getElementById("img_garapa").style.visibility = "hidden";
    document.getElementById("img_guarana").style.visibility = "visible";
    document.getElementById("img_suco").style.visibility = "hidden";
    bebida = "Guaraná Jesus";
    preco_bebida = 3.5;
    sel_bebida = 1;
    fica_verde();
}
function escolhe_suco(){    
    document.getElementById("garapa_id").style.borderColor = "white";
    document.getElementById("guarana_id").style.borderColor = "white";
    document.getElementById("suco_id").style.borderColor = "#32B72F";
    document.getElementById("img_garapa").style.visibility = "hidden";
    document.getElementById("img_guarana").style.visibility = "hidden";
    document.getElementById("img_suco").style.visibility = "visible";
    bebida = "Suco";
    preco_bebida = 4;
    sel_bebida = 1;
    fica_verde();
}
function escolhe_pave(){    
    document.getElementById("pave_id").style.borderColor = "#32B72F";
    document.getElementById("ambrosia_id").style.borderColor = "white";
    document.getElementById("brigadeiro_id").style.borderColor = "white";
    document.getElementById("img_pave").style.visibility = "visible";
    document.getElementById("img_ambrosia").style.visibility = "hidden";
    document.getElementById("img_brigadeiro").style.visibility = "hidden";
    sobremesa = "Pave";
    preco_sobremesa = 4.25;
    sel_sobremesa = 1;
    fica_verde();
}
function escolhe_ambrosia(){    
    document.getElementById("pave_id").style.borderColor = "white";
    document.getElementById("ambrosia_id").style.borderColor = "#32B72F";
    document.getElementById("brigadeiro_id").style.borderColor = "white";
    document.getElementById("img_pave").style.visibility = "hidden";
    document.getElementById("img_ambrosia").style.visibility = "visible";
    document.getElementById("img_brigadeiro").style.visibility = "hidden";
    sobremesa = "Ambrosia";
    preco_sobremesa = 3.75;
    sel_sobremesa = 1;
    fica_verde();
}
function escolhe_brigadeiro(){    
    document.getElementById("pave_id").style.borderColor = "white";
    document.getElementById("ambrosia_id").style.borderColor = "white";
    document.getElementById("brigadeiro_id").style.borderColor = "#32B72F";
    document.getElementById("img_pave").style.visibility = "hidden";
    document.getElementById("img_ambrosia").style.visibility = "hidden";
    document.getElementById("img_brigadeiro").style.visibility = "visible";
    sobremesa = "Brigadeiro";
    preco_sobremesa = 2;
    sel_sobremesa = 1;
    fica_verde();
}

function fica_verde(){   
    if((sel_bebida+sel_prato+sel_sobremesa) == 3){
        const texto = document.querySelector(".texto_rodape");
        texto.textContent = "Fechar Pedido";
        document.getElementById("finalizado").style.backgroundColor = "green";
    }
}
function pedido_finalizado(){
    
    if((sel_bebida+sel_prato+sel_sobremesa) == 3){
        let pedido_preco;
        pedido_preco = preco_bebida + preco_prato + preco_sobremesa;
        let mensagem;
        mensagem  = encodeURIComponent("Olá, gostaria de fazer o pedido: \n" +
        "- Prato: " + prato + "\n" + "- Bebida: " + bebida + "\n" +
        "- Sobremesa: " + sobremesa + "\n" +
        "Total: R$" + pedido_preco);
        
        window.open("https://wa.me/5599999999999?text=" + mensagem); 
    }
    

}
