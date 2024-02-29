/*
let mensaje: string = "Hola Mundo";
mensaje = "chanchacapaca";
console.log (mensaje);
mensaje = "chao mundo";


let animales1 = ['perro','gato','lagarto'] // metodo 1 para definir de forma inferida

let animales2: string []; // metodo para definir en la declaración 

let muebles: string [] = ["mesa", "silla", "armario"] // 2 metodos también son validos

let nums: number [] = [1,2,3] // 

let nums2: Array<number> = [] // metodo alternativo para definir el tipo de dato arreglo <x>

// TUPLAS
// let tupla = [1, 'imanol']; // Si lo declaramos de forma inferida nos genera un tipo de dato OR y no es lo que queremos

let tupla: [number, string] = [1,'imanol']; // Sería la forma correcta de declarar la tupla
*/


const persona = {
    name: 'pepe',
    edad: 31
}

console.log(typeof(persona.name));