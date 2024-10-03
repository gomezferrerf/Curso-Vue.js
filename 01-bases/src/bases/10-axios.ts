import axios from 'axios'
import { TopLevel } from '../interfaces/git.response'

const apiKey = 'VQodCIEzCvTGXShBtGiXqV77NnfOAyO9'

export const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

//giphyApi.get<TopLevel>('/random')
//    .then( resp => console.log(resp.data.data.images.downsized_large.url))
//    .catch( err => console.log(err))