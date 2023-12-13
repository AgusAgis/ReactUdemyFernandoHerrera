//Variables y constantes

const nombre = 'Fernando';
const apellido = 'Perez';
let edad = 35;
edad = 42;
console.log(nombre, apellido, edad);
// no hay dos constantes en el mismo scope que se llamen igual // NO USAR VAR//
if(true){
    let edad = 18;
    console.log(edad);
}
console.log(edad);