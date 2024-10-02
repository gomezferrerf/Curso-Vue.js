import heroes, { type Owner } from "../data/heroes"

export const getHeroById = (id:number) => heroes.find( hero => hero.id === id)

export const getHeroByOwner = (owner: Owner) => heroes.filter( hero => hero.owner === owner)

console.log( getHeroById(100)) 