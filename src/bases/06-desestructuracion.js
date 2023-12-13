//Desestructuracion
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
}

// const { nombre, edad, clave } = persona; 


// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({edad, nombre, rango = 'Capitán'})=>{
    // console.log(edad, nombre, rango );
    return{
        nombreClave : clave,
        anios: edad,
        latlng:{
            lat: 14.1254,
            lng: -15.253
        }
    }

}
const {nombreClave, anios, latlng : {lat, lng}} = useContext(persona);
console.log(nombreClave, anios);
console.log(lat,lng);