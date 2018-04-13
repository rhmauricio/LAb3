//solo numemros
function solonumeros(e){
    key=e.keyCode || e.which;
    teclado=String.fromCharCode(key);
    numeros="0123456789";
    especiales="8-37-39-46";
    tecla_especial=flase;

    for(var i in especiales){
        if(key==especiales[i]){
            tecla_especial=true;
        }
    }
    if(numeros.indexOf(teclado)==-1 && !tecla_especial){
        return false;

    }
}

function retornar(num){
    var anterior=document.fo.valores.value;
    document.getElementById("valores").value=anterior+num;
}
/*
window.onload =function(){
var a=document.getElementById("7").onclick;
alert(a);
var b=prompt();

};*/
