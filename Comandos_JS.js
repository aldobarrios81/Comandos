console.error("Mensaje de error");
console.log("Mensaje en consola");
document.write("Mensaje en HTML");

//Tipos de datos

"Cadena de caracteres"; // String
'Cadena de caracteres'; // String

10000 // Entero
13.4  // Decimal

// Boolean

true
false

// array

['joe', 'martha', 'juan']

// object

{
    "name": "aldo",
    "score": 43.4,
    "horas": 12,
    "profesional": true
}

console.log("Esto es una cadena")

//Variables

var name = "Aldo";
let lastname="Barrios";
const PI=3.1416;
$_edadDePersona = 33;

//Operadores

let num1=33, num2=45, result;
result = num1+num2;
document.write(result)
document.write(" ")
let num1=33, num2=45, result;
result = num1 * num2;
document.write(result)

let num1=33, num2=45, result;
result = num1 / num2;
document.write(result)

let num1=33, num2=45, result;
result = num1 - num2;
document.write(result)

var name = "Aldo";
let lastname="Barrios";
var $_completeName;
$_completeName = name + ' ' + lastname;
document.write($_completeName);

result = num1 < num2;
result = num1 > num2;
result = num1 == num2;
result = num1 != num2;
result = num1 <= num2;

//CONDICIONALES CONTRO DE FLUJO

let passUser = 'Aldo'
let passDb = 'Aldo'
if (passUser == passDb){
    console.log ("Login Correcto");
    else
    console.log ("Login INCORRECTO")
}

let tipoDeTarjeta = "Debito";
switch(tipoDeTarjeta){
    case 'Debito':
        console.write("Es una tajeta de debito ");
        break;
    case 'Credito':
        console.write("Es una tarjeta de credito");
        break;
    default:
        console.warn("No tienes tarjeta");
        break;
}

// BUCLES
let count=50;
while (count > 0) {
    console.log (count);
    count = count - 1;
}


let names = ["juan", "aldo", "paco", "alfredo", "carolina"];
//(console.log (name[1]);)

for(let i = 0; i < names.length; i++){
   console.log(names[i]);
}
// FUNCIONES


function grettings(nombre){
    console.log(nombre);
    console.log("hello");
}

grettings("ALDO");
