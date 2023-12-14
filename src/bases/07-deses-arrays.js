const personajes = ['Mickey', 'Minnie', 'Pluto', 'Alicia']
//console.log(personajes[0])
//Desestructuracion de arreglos
const [ , , p3 ] = personajes;
console.log(p3)

const retornaArreglo = ()=>{
    return ['ABC', 123];
}
const arr = retornaArreglo();
console.log(arr)
//Desestructuración del array
const [ letras, numeros] = retornaArreglo();
console.log(letras, numeros)

const estado = (valor) =>{
    return [ valor, ()=>(console.log('Hola mundo'))]
}
// const array = estado('Goku')
// array[1]();

const [nombre, setNombre] = estado('Mica')

console.log(nombre)
setNombre();