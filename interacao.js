
let prato;
let bebida;
let sobremesa;

function escolhe_acaraje(){    
    document.getElementById("acaraje").style.borderColor = "#32B72F";
    document.getElementById("dadinho").style.borderColor = "white";
    document.getElementById("cuscuz").style.borderColor = "white";
    prato = "Acarajé";
}
function escolhe_dadinho(){    
    document.getElementById("acaraje").style.borderColor = "white";
    document.getElementById("dadinho").style.borderColor = "#32B72F";
    document.getElementById("cuscuz").style.borderColor = "white";
    prato = "Dadinho de Tapioca";
}
function escolhe_cuscuz(){    
    document.getElementById("acaraje").style.borderColor = "white";
    document.getElementById("dadinho").style.borderColor = "white";
    document.getElementById("cuscuz").style.borderColor = "#32B72F";
    prato = "Cuscuz";
}

function escolhe_garapa(){    
    document.getElementById("garapa").style.borderColor = "#32B72F";
    document.getElementById("guarana").style.borderColor = "white";
    document.getElementById("suco").style.borderColor = "white";
    bebida = "Garapa";
}
function escolhe_guarana(){    
    document.getElementById("garapa").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "#32B72F";
    document.getElementById("suco").style.borderColor = "white";
    bebida = "Guaraná Jesus";
}
function escolhe_suco(){    
    document.getElementById("garapa").style.borderColor = "white";
    document.getElementById("guarana").style.borderColor = "white";
    document.getElementById("suco").style.borderColor = "#32B72F";
    bebida = "Suco";
}
function escolhe_pave(){    
    document.getElementById("pave").style.borderColor = "#32B72F";
    document.getElementById("ambrosia").style.borderColor = "white";
    document.getElementById("brigadeiro").style.borderColor = "white";
    sobremesa = "Pave";
}
function escolhe_ambrosia(){    
    document.getElementById("pave").style.borderColor = "white";
    document.getElementById("ambrosia").style.borderColor = "#32B72F";
    document.getElementById("brigadeiro").style.borderColor = "white";
    sobremesa = "Ambrosia";
}
function escolhe_brigadeiro(){    
    document.getElementById("pave").style.borderColor = "white";
    document.getElementById("ambrosia").style.borderColor = "white";
    document.getElementById("brigadeiro").style.borderColor = "#32B72F";
    sobremesa = "Brigadeiro";
}
function pedido_finalizado(){
    document.getElementById("finalizado").style.backgroundColor = "#32B72F";
}

