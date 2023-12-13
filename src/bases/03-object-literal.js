
const persona = {
 nombre: 'Agustin',
 apellido : 'Agis',
 edad: 29,
 direccion:{
    calle: 'Rawson',
    ciudad: 'Almagro',
    CP: '1812'
 }
};
console.table(persona);
console.log(persona);

// const persona2 = persona 
//está mal porque de hacer eso le asigno la dirección
//en memoria del objeto anterior y los cambios se hacen 
//sobre ese objeto y no sobre el clon
// para hacer una copia del objeto {...persona}

const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona);
console.log(persona2);