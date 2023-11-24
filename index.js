//variables
var nombre= "messi";// number
let edad=35;
let apellido= 'Decima';//cadena de caracteres => string '', "",``//
const DNI=353535; //no se puede cambiar el valor
let falso=false;
let verdadero=true;
console.log("=======================");
console.log( 'mi nombre es ' + nombre + ' y mi edad es ' + apellido);
console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`);//interpolacion de variables

//Operadores matematicos
// + - * / % **

//operadores relacionales
// == != < > >= <= ===

//Operadores logicos
// ||  ! &&

let uno=300;
let dos=250;
let resultado= uno+dos;
console.log(resultado);

let resultado1=uno-dos;
console.log(resultado1);

let resultado2= uno*dos;
console.log(resultado2);

let resultado3=uno/dos;
console.log(resultado3);

let resultado4=uno**dos;
console.log(resultado4);

let resultado5=uno%dos;
console.log(resultado5);

uno+2; //contador
console.log(uno);

uno--;//decrementa
console.log(uno);

//acumulador
let acumulador=0;
acumulador+=5;
console.log(acumulador);
console.log("================================");
//pedimos datos
nombre = prompt('Por favor, introduzca su nombre');//pide ingresar el nombre del usuario
//imprimimos en consola
console.log(`Hola ${nombre}, bienvenido a mi pagina web`);// en este tipo de codificacion es necesario utilizar ``
//mostramos mediante alerta
alert(`Hola ${nombre}, Bienvenido a mi pagina web`);
console.log("=================================");
