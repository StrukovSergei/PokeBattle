import {utilService} from '../services/util.service'
import Axios from 'axios'

export const pokeService = {
    query
}

window.pokeService = pokeService


async function query() {
    try {
        const randomPokemonIds = utilService.generateRandomNumbers(6, 0, 1010)
        const pokemonPromises = randomPokemonIds.map(async (id) => {
            const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/?limit=20&offset=20`
            const response = await Axios.get(apiUrl)
            console.log("🚀 ~ file: poke.service.js:17 ~ pokemonPromises ~ apiUrl:", apiUrl)
            return response.data
        })

        const pokemons = await Promise.all(pokemonPromises)
        return pokemons.map(pokemon => ({
            name: pokemon.name,
            hp: pokemon.stats[0].base_stat
        }))
    } catch (err) {
        console.error('Cannot fetch Pokémon data', err)
        throw err
    }
}
// async function query() {
//     try {
//         const apiUrl = `https://pokeapi.co/api/v2/pokemon?limit=6&offset=0`
//         const response = await Axios.get(apiUrl)
//         const pokemons = response.data.results.map(pokemon => ({
//             name: pokemon.name,
            
//         }))
//         return pokemons
//     } catch (err) {
//         console.error('Cannot fetch Pokémon data', err)
//         throw err
//     }
// }


