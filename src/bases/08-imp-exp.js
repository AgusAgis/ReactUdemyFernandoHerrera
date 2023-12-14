import {heroes} from './data/heroes';



console.log(heroes);

const getHeroeById = (id) =>{
    return heroes.find((heroe) => heroe.id === id);
}
const getHeroeByIdSimpler = (id) => heroes.find((heroe) => heroe.id === id);

//console.log(getHeroeByIdSimpler(4))

//OJO el FIND devuelve UNO y el FILTER MAS DE UNO

const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
console.log(getHeroesByOwner('DC'));