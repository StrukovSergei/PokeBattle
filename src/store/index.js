import { createStore } from 'vuex'
import { pokeService } from '../services/poke.service'
// import { itemService } from '../services/item.service'
// Create a new store instance.
export const store = createStore({
  state: {
    msg: 'store is connected',
    filterBy: null,
    pokemons: null,
  },
  getters: {
    getPokemons(state) {
      return state.pokemons
    },
    getFilter(state) {
      return state.filterBy
    },
    getMsg(state) {
      return state.msg
    },
  },
  mutations: {
    setFilter(state, { filter }) {
      state.filterBy = { ...filter }
    },
    setPokemons(state, { pokemons }) {
      state.pokemons = pokemons
    },
    updatePokemonHp(state, { pokemonId, newHp }) {
      const updatedPokemons = state.pokemons.map(pokemon => {
        if (pokemon._id === pokemonId) {
          return { ...pokemon, hp: newHp }
        }
        return pokemon
      })
      state.pokemons = updatedPokemons
    },
  },
  actions: {
    async loadPokemons({ commit, state, }) {
      // const items = await itemService.query(state.filterBy)
      const pokemons = await pokeService.query(state.filterBy)
      commit({ type: 'setPokemons', pokemons })
    },
  },
  modules: {},
})
