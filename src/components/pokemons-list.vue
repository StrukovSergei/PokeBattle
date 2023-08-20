<template>
  <section class="pokemons-list flex text-center">
    <pokemonPreview
      v-for="pokemon in pokemons"
      :key="pokemon._id"
      :pokemon="pokemon"
      @attack="userAttack"
    />
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
      // Open a dialog to choose the target PC Pokémon
      this.$emit('choose-target', { attacker, move })
    },
  },
  components: {
    pokemonPreview,
  },
};
</script>
