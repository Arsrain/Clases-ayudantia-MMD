//let se utiliza para declarar una variable que puede ser reasignada

//const se utiliza para declarar una variable que no puede ser reasignada

//var se utiliza para declarar una variable que puede ser reasignada, pero no se recomienda su uso

// ? let 

/*let nombre = "Brayan";
console.log("nombre:", nombre);

// ? const

const edad = 20;
console.log("edad:", edad);

// ? var

var apellido = "Fuentealba";
console.log("apellido:", apellido);

// ! tipos de datos primitivos

// ? number: los numeros enteros y decimales (float)

// infinity

const num = 1 / 0;
console.log(num);

const numero = infinity;
console.log(numero);

// -infinity

const num1 = -infinity;
console.log(num1);

//NaN

const num2 = "no es un numero" / 2;
console.log(num2);

// ? string: es una cadena de caracteres

const saludo = "Hola";
const despedida = 'Adios';
const frase = `${saludo}, como estan?`;
console.log(saludo);
console.log(despedida);
console.log(frase);

// ? boolean: true o false

let esVerdad = true;
let esFalso = false;

console.log(esVerdad)
console.log(esFalso)

// ? null: es un valor especial que no pertenece a ningun tipo de dato

let nulo = null;
console.log(nulo);

// ? undefined: es un valor especial que no esta definido

let indefinido;
console.log(indefinido);
*/
// ! tipo de datos no primitivos

// ? object: es un tipo de dato que permite almacenar multiples valores

const estudiante = {
    nombre: "Brayan",
    edad: 20,
    carrera: "Ingenieria de ejecucion en computacion e informatica",
    universidad: "UBB",
}

//console.log(estudiante);
console.log("nombre:", estudiante.nombre);
console.log("edad:", estudiante.edad);
console.log("carrera:", estudiante.carrera);
console.log("universidad:", estudiante.universidad);
console.log(typeof estudiante);

// ? array: es un tipo de dato que permite almacenar multiples valores

const arreglo = [1, 2, 3, 4, 5];
console.log(arreglo);

// ? function: es un tipo de dato que permite almacenar una funcion

const funcion = function() {
    return "Hola mundo";
}

console.log(funcion());
