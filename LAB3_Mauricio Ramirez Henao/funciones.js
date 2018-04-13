/*//solo numemros
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
	alert("entra");
}

window.onload =function(){
var a=document.getElementById("7").onclick;
alert(a);
var b=prompt();
alert("entramos");
};
*/
window.onload = function(){ //Acciones tras cargar la página
pantalla0=document.getElementById("display-div0");
pantalla1=document.getElementById("display-div1"); //elemento pantalla de salida
pantalla0.innerHTML="";
pantalla1.innerHTML=0;
document.onkeydown = teclado; //función teclado disponible
};
x="0"; //guardar número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
init=false;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.

function numero(xx) { //recoge el número pulsado en el argumento.
         if (x=="0" || xi==1  ) { // inicializar un número, 
            pantalla1.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número
            if (xx==".") { //si escribimos una coma al principio del número
               pantalla1.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un número
               if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla1.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar el estado de la coma  
               }
              //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
               else if (xx=="." && coma==1) {} 
               //Resto de casos: escribir un número del 0 al 9: 	 
               else {
                   pantalla1.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 //el número está iniciado y podemos ampliarlo.
  }

function operacion(s) {
         igualar() //si hay operaciones pendientes se realizan primero
         ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         xi=1; //inicializar pantalla.
         }	
function igualar() {
         if (op=="no") { //no hay ninguna operación pendiente.
            pantalla1.innerHTML=x;	//mostramos el mismo número	
            }
		else if(op=="exp"){
			pantalla1.innerHTML=0;	
		}
         else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            pantalla1.innerHTML=sol //mostramos la solución
			pantalla0.innerHTML="Ans = "+sol;
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
			
            }
        }
 
 function borrar(){
		pantalla0.innerHTML="Ans = "+x;
		pantalla1.innerHTML=0;
		x="0"; //guardar número en pantalla
		xi=1; //iniciar número en pantalla: 1=si; 0=no;
		coma=0; //estado coma decimal 0=no, 1=si;
		init=false;
		ni=0; //número oculto o en espera.
		op="no"
	 
 }
 
 function raizc() {
        x=Math.sqrt(x) //resolver raíz cuadrada.
        pantalla1.innerHTML=x; //mostrar en pantalla resultado
        op="no"; //quitar operaciones pendientes.
		igualar();
        xi=1; //se puede reiniciar la pantalla 
		 
         }
		 
function porcent() { 
         x=x/100 //dividir por 100 el número
         pantalla1.innerHTML=x; //mostrar en pantalla
         igualar() //resolver y mostrar operaciones pendientes
         xi=1 //reiniciar la pantalla
         }
		 
		 
function inve() {
         nx=Number(x);
         nx=(1/nx);
         x=String(nx);		 
         pantalla1.innerHTML=x;
		 igualar();
         xi=1; //reiniciar pantalla al pulsar otro número.
		 
         }
		 
function factorial(){
	
}

function seno(){
		nx=Number(x);
        nx=Math.sin(nx);
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
        xi=1; //reiniciar pantalla al pulsar otro número.
}
function lognat(){
		nx=Number(x);
        nx=Math.log1p(nx);
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
        xi=1; //reiniciar pantalla al pulsar otro número.
		
}
function euler(){
		nx=Number(x);
        nx=Math.E;
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
        xi=1; //reiniciar pantalla al pulsar otro número.
}
function coseno(){
		nx=Number(x);
        nx=Math.cos(nx);
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
        xi=1; //reiniciar pantalla al pulsar otro número.
}
function logaritmo(){
		nx=Number(x);
        nx=Math.log(nx);
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
        xi=1; //reiniciar pantalla al pulsar otro número.
}
function tangente(){
		nx=Number(x);
        nx=Math.tan(nx);
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
        xi=1; //reiniciar pantalla al pulsar otro número.
}
function exponente(){

		igualar(); //si hay operaciones pendientes se realizan primero
        alert("entra");
		ni=x; //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
        op="exp"; //guardamos tipo de operación.
        xi=1; //inicializar pantalla.
		nx=Number(ni);
		alert("entra");
		x=Number(x);
		sol=nx*Math.exp(x); // escribimos la operación en una cadena
		sol=String(sol);
		alert("entra");
}
function elevado(){
		nx=Number(x);
        nx=Math.pow(nx);
        x=String(nx);		 

}
