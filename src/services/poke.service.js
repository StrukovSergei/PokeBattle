// import { storageService } from './async-storage.service'
// import { httpService } from './http.service'
// // import { store } from '../store/store'
// import { socketService, SOCKET_EVENT_USER_UPDATED, SOCKET_EMIT_USER_WATCH } from './socket.service'
// import { showSuccessMsg } from './event-bus.service'
import Axios from 'axios'

export const pokeService = {
    query
}

window.pokeService = pokeService


async function query() {
    try {
        const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=6&offset=0`
        const response = await Axios.get(apiUrl)
        const pokemons = response.data.results.map(pokemon => ({
            name: pokemon.name,
            url: pokemon.url,
        }))
        return pokemons
    } catch (err) {
        console.error('Cannot fetch Pokémon data', err)
        throw err
    }
}


