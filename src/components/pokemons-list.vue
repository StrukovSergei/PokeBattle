<template>
  <section class="items-list">
    <pokemons-preview v-for="pokemon in pokemons" :key="pokemon._id" :pokemon="pokemon" />
  </section>
</template>

<script>
import itemPreview from './item-preview.vue'
export default {
  name: 'item-list',
  props: {
    pokemons: Array,
  },
  components: {
    pokemonsPreview,
  },
}
</script>

<style></style>
