import type { Hero } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

//new Promise ( (resolve, reject) => {
    //setTimeout(()=> {
    //    resolve('Mi amigo cumplió')
    //},1000)


//    reject('Mi amigo no cuplió')

//})
//.then(  ( message ) => console.log( message))
//.catch(  ( errorMessage ) => console.log( errorMessage))
//.finally(   () => console.log('Fin de la promesa'))

//---------------------------------------------------------------------------------------------
//                             ARGUMENTOS DE UNA PROMESA

const getHeroByIdAsync = ( id: number):Promise<Hero> => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById( id );
            
            hero ? resolve(hero) : reject(`Heroe #${id} no existe`)

        }, 1500)
    })
}

getHeroByIdAsync(100).then( hero => console.log('El nombre es', hero.name)).catch( message => alert(message))
