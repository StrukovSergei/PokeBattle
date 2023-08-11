import { createStore } from 'vuex'
import { itemService } from '../services/item.service'
// Create a new store instance.
export const store = createStore({
  state: {
    msg: 'store is connected',
    filterBy: null,
    items: null,
  },
  getters: {
    getItems(state) {
      return state.items
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
    setItems(state, { items }) {
      state.items = items
    },
  },
  actions: {
    async loadItems({ commit, state, }) {
      const items = await itemService.query(state.filterBy)
      console.log('items:', items)
      commit({ type: 'setItems', items })
    },
  },
  modules: {},
})
