<template>
  <section class="pokemons-list flex text-center">
    __________________________________________________________________________________________________________

    <pokemonPreview
      v-for="pokemon in pokemons"
      :key="pokemon._id"
      :pokemon="pokemon"
      @attack="userAttack"
    />
    <h1>Your pokemons</h1>

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
      const { attacker, move } = attackData
      this.$emit('choose-target', { attacker, move })
    },
  },
  components: {
    pokemonPreview,
  },
};
</script>
