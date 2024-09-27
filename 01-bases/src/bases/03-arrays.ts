

export const numberArrey = [1,2,3,4,5]

numberArrey.push(6)
const numberArrey2 = structuredClone(numberArrey)

numberArrey2[2]=6


console.log({numberArrey2})