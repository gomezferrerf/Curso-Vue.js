
const apiKey = 'VQodCIEzCvTGXShBtGiXqV77NnfOAyO9'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({data}) => console.log({ data}))
    .catch( err => console.info( err ))
