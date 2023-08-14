<template>
  <section>
    <!-- <app-filter></app-filter> -->
    <h1>app</h1>
    <pokemons-list :pokemons="pokemons" />
  </section>
  <RouterView />
</template>

<script>
import pokemonsList from '../components/pokemons-list.vue'
import appFilter from './../components/app-filter.vue'

export default {
  name: 'pokemons-app',
  components: {
    pokemonsList,
    appFilter,
  },
  created() {
    // this.$store.dispatch({ type: 'loadItems' })
    this.$store.dispatch('loadPokemons')
  },



  computed: {
    pokemons() {
      // const filterBy = this.$store.getters.getFilter
      // let items = this.$store.getters.getItems
      // console.log(filterBy)
      // if (!filterBy) return items
      // const regex = new RegExp(filterBy.txt, 'i')
      // return items.filter((item) => regex.test(item.content))
      let pokemons = this.$store.getters.getPokemons
      return pokemons
    },
  },
}
</script>

<style></style>
