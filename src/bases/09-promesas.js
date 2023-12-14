import {getHeroeById} from './bases/08-imp-exp'
// const promesa = new Promise((resolve, reject)=>{

//     setTimeout(()=> {
//         // console.log('2 segundos despues');
//         //resolve();
//         const p = getHeroeById(2)
//         resolve(p);
//         //reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promesa.then((heroe)=>{
//     console.log('Heroe', heroe);
// })
// .catch(err=> console.warn(err));

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1 = getHeroeById(id);
            if(p1){
                resolve(p1);
            } else{
                reject('No se pudo encontrar el héroe');
            }
        },2000)
    });
   
}
getHeroeByIdAsync(5)
    .then(console.log)
    .catch( console.warn);