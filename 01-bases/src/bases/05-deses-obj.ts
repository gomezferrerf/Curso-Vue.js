
interface Hero {
    name: string;
    age: number;
    codeName:string;
    power?: string;
}

export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    power: 'Money'
}

// const { age, name, power = 'No tiene poder' } = person //este objeto puede ser una Obj o un Arrey

// console.log({age, name, power})

interface CreateHoeroArgs {
    name: string;
    age: number;
    codeName:string;
    power?: string;
}

const createHero = ( {name, age, codeName, power} : CreateHoeroArgs ) => ({
    id: 12234,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene Poder'
})

//console.log( createHero( person ))

//---------------------------------------------------------------------------------------------------

//DESESTRUCTURACIÓN DE ARREGLOS

const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten']

const [g, , t] = characters

//console.log({g,t})

const returnArrey = () => {
    return [123, 'ABC'] as const
}

const [numbers, letters ] = returnArrey()

//console.log(numbers * 2, letters.toLowerCase)
