let prato;
let bebida;
let sobremesa;
let sel_prato, sel_bebida, sel_sobremesa;
function escolhe_acaraje(){   

    document.getElementById("acaraje_id").style.borderColor = "#32B72F";
    document.getElementById("dadinho_id").style.borderColor = "white";
    document.getElementById("cuscuz_id").style.borderColor = "white";
    document.getElementById("img_acaraje").style.visibility = "visible";
    document.getElementById("img_dadinho").style.visibility = "hidden";
    document.getElementById("img_cuscuz").style.visibility = "hidden";
    prato = "Acarajé";
    sel_prato = 1;
}
function escolhe_dadinho(){  

    document.getElementById("dadinho_id").style.borderColor = "#32B72F";
    document.getElementById("acaraje_id").style.borderColor = "white";
    document.getElementById("cuscuz_id").style.borderColor = "white";
    document.getElementById("img_acaraje").style.visibility = "hidden";
    document.getElementById("img_dadinho").style.visibility = "visible";
    document.getElementById("img_cuscuz").style.visibility = "hidden";
    prato = "Dadinho de Tapioca";
    sel_prato = 1;
}
function escolhe_cuscuz(){    

    document.getElementById("cuscuz_id").style.borderColor = "#32B72F";
    document.getElementById("dadinho_id").style.borderColor = "white";
    document.getElementById("acaraje_id").style.borderColor = "white";
    document.getElementById("img_acaraje").style.visibility = "hidden";
    document.getElementById("img_dadinho").style.visibility = "hidden";
    document.getElementById("img_cuscuz").style.visibility = "visible";
    prato = "Cuscuz";
    sel_prato = 1;
}

function escolhe_garapa(){    
    document.getElementById("garapa_id").style.borderColor = "#32B72F";
    document.getElementById("guarana_id").style.borderColor = "white";
    document.getElementById("suco_id").style.borderColor = "white";
    document.getElementById("img_garapa").style.visibility = "visible";
    document.getElementById("img_guarana").style.visibility = "hidden";
    document.getElementById("img_suco").style.visibility = "hidden";
    bebida = "Garapa";
    sel_bebida = 1;
}
function escolhe_guarana(){    
    document.getElementById("garapa_id").style.borderColor = "white";
    document.getElementById("guarana_id").style.borderColor = "#32B72F";
    document.getElementById("suco_id").style.borderColor = "white";
    document.getElementById("img_garapa").style.visibility = "hidden";
    document.getElementById("img_guarana").style.visibility = "visible";
    document.getElementById("img_suco").style.visibility = "hidden";
    bebida = "Guaraná Jesus";
    sel_bebida = 1;
}
function escolhe_suco(){    
    document.getElementById("garapa_id").style.borderColor = "white";
    document.getElementById("guarana_id").style.borderColor = "white";
    document.getElementById("suco_id").style.borderColor = "#32B72F";
    document.getElementById("img_garapa").style.visibility = "hidden";
    document.getElementById("img_guarana").style.visibility = "hidden";
    document.getElementById("img_suco").style.visibility = "visible";
    bebida = "Suco";
    sel_bebida = 1;
}
function escolhe_pave(){    
    document.getElementById("pave_id").style.borderColor = "#32B72F";
    document.getElementById("ambrosia_id").style.borderColor = "white";
    document.getElementById("brigadeiro_id").style.borderColor = "white";
    document.getElementById("img_pave").style.visibility = "visible";
    document.getElementById("img_ambrosia").style.visibility = "hidden";
    document.getElementById("img_brigadeiro").style.visibility = "hidden";
    sobremesa = "Pave";
    sel_sobremesa = 1;
}
function escolhe_ambrosia(){    
    document.getElementById("pave_id").style.borderColor = "white";
    document.getElementById("ambrosia_id").style.borderColor = "#32B72F";
    document.getElementById("brigadeiro_id").style.borderColor = "white";
    document.getElementById("img_pave").style.visibility = "hidden";
    document.getElementById("img_ambrosia").style.visibility = "visible";
    document.getElementById("img_brigadeiro").style.visibility = "hidden";
    sobremesa = "Ambrosia";
    sel_sobremesa = 1;
}
function escolhe_brigadeiro(){    
    document.getElementById("pave_id").style.borderColor = "white";
    document.getElementById("ambrosia_id").style.borderColor = "white";
    document.getElementById("brigadeiro_id").style.borderColor = "#32B72F";
    document.getElementById("img_pave").style.visibility = "hidden";
    document.getElementById("img_ambrosia").style.visibility = "hidden";
    document.getElementById("img_brigadeiro").style.visibility = "visible";
    sobremesa = "Brigadeiro";
    sel_sobremesa = 1;
}
function pedido_finalizado(){
    

}