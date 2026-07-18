console.log("Integracion correcta: Archivo JS esta conectado y funcionando");


let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola " + nombre + ", bienvenido a la aplicación de consola en JavaScript.");

//pedir al usuario que ingrese un número
let num1 = parseFloat(prompt("Ingresa un número:"));
let num2 = parseFloat(prompt("Ingresa otro número:"));

//operaciones matemáticas
function sumar(a, b) {
    return a + b;
}
function restar(a, b) {
    return a - b;
}
function multiplicar(a, b) {
    return a * b;
}
function dividir(a, b) {
    if (b === 0) {
        alert("Error: No se puede dividir entre cero.");
        return null;
    }
    return a / b;
}

console.log("suma:", sumar(num1, num2));
console.log("resta:", restar(num1, num2));
console.log("multiplicación:", multiplicar(num1, num2));
console.log("división:", dividir(num1, num2));

if (num1 > num2) {
    console.log(num1 + " es mayor que " + num2);
} else if (num1 < num2) {
    console.log(num1 + " es menor que " + num2);
} else {
    console.log(num1 + " es igual a " + num2);
}

//swtich case

let operacion = prompt("Elige una operación: sumar, restar, multiplicar, dividir");
switch (operacion) {
    case "sumar":
        alert("Resultado: " + sumar(num1, num2));
        break;
    case "restar":
        alert("Resultado: " + restar(num1, num2));
        break;
    case "multiplicar":
        alert("Resultado: " + multiplicar(num1, num2));
        break;
    case "dividir":
        alert("Resultado: " + dividir(num1, num2));
        break;
    default:
        alert("Operación no válida");
}
//arreglos y ciclos
//crear un arreglo con lista de elementos
let frutas = ["manzana", "banana", "naranja", "pera"];
console.log("Lista de frutas:");
for (let i = 0; i < frutas.length; i++) {
    console.log("fruta", frutas[i]);
}

console.log("Recorrido con While:");
let i = 0;
while (i < frutas.length) {
    console.log("fruta con while", frutas[i]);
    i++;
}

function filtrarFrutas(lista, letra) {
    return lista.filter(fruta => fruta.startsWith(letra));
}
// probando la función filtrarFrutas
let letraBuscada = prompt("Ingresda una letra para filtrar las frutas");
let frutasFiltradas = filtrarFrutas(frutas, letraBuscada.toLowerCase());
console.log("Frutas que empiezan con la letra '" + letraBuscada + "':", frutasFiltradas);
alert("Frutas que empiezan con la letra '" + letraBuscada + "': " + frutasFiltradas.join(", "));

//Funciones en JavaScript
function operacionesBasicas(a, b) {
    console.log("Resultados de las operaciones:");
    console.log("Suma:", sumar(a, b));
    console.log("Resta:", restar(a, b));
    console.log("Multiplicación:", multiplicar(a, b));
    console.log("División:", dividir(a, b));
}   

function calcularPromedio (a, b){
    return (a + b) / 2;
}
function resumenOperaciones(a, b) {
    operacionesBasicas(a, b);
    console.log("Promedio:", calcularPromedio(a, b));
}   

resumenOperaciones(num1, num2);

//objetos en JavaScript (crear un objeto con propiedades y métodos)

let estudiante = {
    nombre: nombre,
    edad: 33,
    curso: "JavaScript",
    saludar: function() {
        console.log("Hola, soy " + this.nombre + " y estoy aprendiendo " + this.curso);
    }
};
// usar el objeto.
estudiante.saludar();

estudiante.obternerNacimiento = function(anioActual) {
    return anioActual - this.edad;
};
console.log("Año de nacimiento de " + estudiante.nombre + ": " + estudiante.obternerNacimiento(2026));

//crear arreglo de objetos
let estudiantes = [
    { nombre: "Ana", edad: 22, curso: "JavaScript" },
    { nombre: "Luis", edad: 25, curso: "Python" },
    { nombre: "Marta", edad: 20, curso: "Java" }
];

// recorrer un arreglo de objetos
console.log("Lista de estudiantes:");
estudiantes.forEach(est => {
    console.log(est.nombre + " tiene " + est.edad + " años y estudia " + est.curso);
}); 

// Recorrer con map y crear un nuevo arreglo con los nombres de los estudiantes
let nombresEstudiantes = estudiantes.map(est => est.nombre);
console.log("Nombres de los estudiantes:", nombresEstudiantes);


