//Funciones en JS
//De hacer la funcion como la de abajo se puede pisar y 
//reasignar valores.
function saludarNO(nombre){
    return `Hola, ${nombre}`
}
saludarNO = 30
//Función tradicional no pisable
const saludar = function(nombre){
    return `Hola, ${nombre}`;
}
//función flecha 
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}
//funcion flecha simplificada
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// ahora no se puede pisar con estos valores saludar = 20;
console.log(saludar2('Ester'));
console.log(saludar3('Diego'));
console.log(saludar4());

const getUser = () =>{
    return{
        uid:'ABC123',
        username: 'El_papi1502'
    }
}
console.log(getUser())
//funcion simplicada quitando el return y pasandole un obj
//dentro de los parentesis
const getUser2 = () =>({
    uid:'ABC123',
    username: 'El_papi1502'
})
const user = getUser2();
console.log(user);

const getUsuarioActivo = (nombre) =>({
    uid : 'ABC456',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Roberto');
console.log(usuarioActivo)
