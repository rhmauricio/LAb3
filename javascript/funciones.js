//Declaracion de variables globales 11:50

x="0"; //guardar número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
init=false;
ni=0; //número oculto o en espera.
op="no"; //operación en curso; "no" =  sin operación.
tipo="deg";
temaglobal=1;
globalvariabl=2;
inverso=0;

//Acciones tras cargar la página
window.onload = function(){ 
pantalla0=document.getElementById("display-div0");
pantalla1=document.getElementById("display-div1"); 
pantalla0.innerHTML="Ans = 0";
pantalla1.innerHTML=0;
document.getElementById("deg").style.backgroundColor = "green";
};


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
function rad(value){
	
	if(value=="rad"){
		globalvariabl=1;
		document.getElementById("rad").style.backgroundColor = "green";
		if(temaglobal==1){
		document.getElementById("deg").style.backgroundColor = "#414141";
		}else{
		document.getElementById("deg").style.backgroundColor = "red";
		}
	}
	else if(value=="deg"){
		globalvariabl=2;
		document.getElementById("deg").style.backgroundColor = "green";
		if(temaglobal==1){
		document.getElementById("rad").style.backgroundColor = "#414141";
		}else{
		document.getElementById("rad").style.backgroundColor = "red";
		}
	}
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
			document.getElementById("arcsin").innerHTML = "sin";
			document.getElementById("expodiez").innerHTML = "ln";
			document.getElementById("arccos").innerHTML = "cos";
			document.getElementById("loginv").innerHTML = "log";
			document.getElementById("arctan").innerHTML = "tan";
			document.getElementById("razinv").innerHTML = "√";
			document.getElementById("elevinv").innerHTML = "x<sup>y</sup>";
			document.getElementById("prueba").innerHTML = "Ans";
			inverso=0;
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
		if(inverso==1){x=Math.pow(x,2);}
        else{x=Math.sqrt(x)} //resolver raíz cuadrada.
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
	inverso=1;
	document.getElementById("arcsin").innerHTML = "sin<sup>-1</sup>";
	document.getElementById("expodiez").innerHTML = "e<sup>x</sup>";
	document.getElementById("arccos").innerHTML = "cos<sup>-1</sup>";
	document.getElementById("loginv").innerHTML = "10<sup>x</sup>";
	document.getElementById("arctan").innerHTML = "tan<sup>-1</sup>";
	document.getElementById("razinv").innerHTML = "x<sup>2</sup>";
	document.getElementById("elevinv").innerHTML = "<sup>y</sup>√x";	
	document.getElementById("prueba").innerHTML = "Rnd";
}
        
		 
function factorial(){
	n=Number(x);
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	x=String(total);		 
    pantalla1.innerHTML=x;
	igualar();
    xi=1; //reiniciar pantalla al pulsar otro número.
	
}

function seno(){
	
		nx=Number(x);
		if(globalvariabl==1){nx=nx *( Math.PI / 180);alert(nx);}
		alert(inverso);
		if(inverso==1){nx=Math.asin(nx);alert(nx);}
        else{nx=Math.sin(nx);}
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
		inverso=0;
        xi=1; //reiniciar pantalla al pulsar otro número.
}
function lognat(){
		nx=Number(x);
		if(inverso==1){nx=Math.pow(Math.E,nx);}
        else{nx=Math.log(nx)};
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
        xi=1; //reiniciar pantalla al pulsar otro número.
		inverso=0;
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
		if(globalvariabl==1){nx=nx *( Math.PI / 180);}
		if(inverso==1){nx=Math.acos(nx);}
		else{nx=Math.cos(nx);}
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
        xi=1; //reiniciar pantalla al pulsar otro número.
}
function logaritmo(){
		nx=Number(x);
		if(inverso==1){nx=Math.pow(10,nx);}
        else{nx=Math.log10(nx)};
        x=String(nx);		 
        pantalla1.innerHTML=x;
		igualar();
        xi=1; //reiniciar pantalla al pulsar otro número.
}
function tangente(){
		nx=Number(x);
		if(globalvariabl==1){nx=nx *( Math.PI / 180);}
		if(inverso==1){nx=Math.atan(nx);}
        else{nx=Math.tan(nx);}
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
		if(inverso==1){nx=Math.pow(nx);}
        else{nx=Math.pow(nx);}
		x=String(nx);
}		
		
function funAns(){
		nx=Number(x);
		if(inverso==1){nx=Math.random(nx);}
		else{nx=sol;}
		x=String(nx);		 
		pantalla1.innerHTML=x;
		igualar();
		xi=1; 
}

//Cambio de estilos
function cambiotema(tema){
	temaglobal=tema;
	document.getElementById("tema1").href=`../css/style${tema}.css`;
	if(temaglobal==1){
		if(globalvariabl==1){document.getElementById("deg").style.backgroundColor = "#414141";}
		else{document.getElementById("rad").style.backgroundColor = "#414141";}
			
	}else{
		if(globalvariabl==2){document.getElementById("rad").style.backgroundColor = "red";}
		else{document.getElementById("deg").style.backgroundColor = "red";}	
	}
	
}
