<template>
  <section class="pokemons-list flex text-center">
    <pokemon-preview v-for="pokemon in pokemons" :key="pokemon._id" :pokemon="pokemon" />
  </section>
</template>

<script>
import pokemonPreview from './pokemon-preview.vue'
export default {
  name: 'pokemon-list',
  props: {
    pokemons: Array,
  },
  components: {
    pokemonPreview,
  },
}
</script>

<style></style>
