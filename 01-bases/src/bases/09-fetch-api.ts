import type { TopLevel } from "../interfaces/git.response"

const apiKey = 'VQodCIEzCvTGXShBtGiXqV77NnfOAyO9'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then((body: TopLevel) => console.log(body.data.images.downsized_medium.url))
    .catch( err => console.info( err ))
