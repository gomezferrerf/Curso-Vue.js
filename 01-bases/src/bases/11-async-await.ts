import type { TopLevel } from "../interfaces/git.response"
import { giphyApi } from "./10-axios"

export const getImage = async() => {
    try {
        const resp = await giphyApi.get<TopLevel>('/randomdsas')
        return resp.data.data.images.downsized_large.url
    } catch (error) {
        throw 'image not found'
    }
}


getImage().then(url=> console.log(url)).catch(error => console.log(error))
