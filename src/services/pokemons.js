import {API} from "./api"

export const getPokemons = (url) => {

    return API.get(url);
}
