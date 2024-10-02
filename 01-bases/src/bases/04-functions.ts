
//Opción uno
function greetPerson(name: string){
    return `Hola, ${name}`
}

//Opción dos
const greetPerson2 = (name: string) => {
    return `Hola, ${name}`
}

//Opción tres
const greetPerson3 = (name: string) => `Hola, ${name}`

//nueva función
const getUser = () => {
    return {
        uid: 'ABC-123',
        username: 'Tony001'
    }
}

//nueva función metodo tres
//nueva función
const getUser2 = () => 
    ({
        uid: 'ABC-123',
        username: 'Tony001'
    })      

//-------------------------------------------------------------------------------------------------

const heroes = [
    {
        id: 1,
        name: 'Batman',
        //power: 'Money'
    },
    {
        id:2,
        name: 'Superman',
        power: 'Super strength'
    }
]

const hero = heroes.find( (h) => h.id === 1)

console.log(hero?.power?.toUpperCase()) // el ? hace que se permitan valores indefinidos
