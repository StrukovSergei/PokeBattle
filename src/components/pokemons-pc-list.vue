<template>
  <section class="pokemons-list flex text-center">
    <h1>Opponent pokemons</h1>
    <pokemon-preview v-for="pokemon in pokemons" :key="pokemon._id" :pokemon="pokemon" @attack="userAttack" />
  </section>
</template>

<script>
import pokemonPreview from './pokemon-preview.vue'
export default {
  name: 'pokemon-list',
  props: {
    pokemons: Array,
  },

  methods: {
    userAttack(attackData) {
     
      // Handle the user's attack logic here
      const { attacker, move } = attackData
      // Calculate damage, update PC's Pokemon HP, and handle the PC's move
    },
  },

  components: {
    pokemonPreview,
  },
}
</script>

<style></style>
