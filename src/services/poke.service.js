import { utilService } from '../services/util.service'
import Axios from 'axios'

export const pokeService = {
    query
}

window.pokeService = pokeService


async function query() {
    try {
        const randomPokemonIds = utilService.generateRandomNumbers(6, 0, 808)
        const pokemonPromises = randomPokemonIds.map(async (id) => {
            const pokemonApiUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`
            const pokemonResponse = await Axios.get(pokemonApiUrl)
            const pokemonData = pokemonResponse.data

            const moves = pokemonData.moves.slice(0, 4)
            const movePromises = moves.map(async (moveData) => {
                const moveApiUrl = moveData.move.url
                const moveResponse = await Axios.get(moveApiUrl)
                const moveDetails = moveResponse.data
                return {
                    name: moveDetails.name,
                    power: moveDetails.power || 0
                }
            })

            const moveResults = await Promise.all(movePromises)

            return {
                name: pokemonData.name,
                hp: pokemonData.stats.find(stat => stat.stat.name === 'hp').base_stat,
                moves: moveResults,
                sprite: pokemonData.sprites.front_default,
                _id: pokemonData.id
            }
        })

        const pokemons = await Promise.all(pokemonPromises)
        return pokemons;
    } catch (err) {
        console.error('Cannot fetch Pokémon data', err)
        throw err
    }
}
