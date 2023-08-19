<template>
  <section class="pokemons-list flex text-center">
    <pokemon-preview
      v-for="pokemon in pokemons"
      :key="pokemon._id"
      :pokemon="pokemon"
      @attack="userAttack"
    />
  </section>
</template>

<script>
export default {
  name: 'pokemon-list',
  props: {
    pokemons: Array,
  },
  methods: {
    userAttack(attackData) {
      const { attacker, move } = attackData;
      // Open a dialog to choose the target PC Pokémon
      this.$emit('choose-target', { attacker, move });
    },
  },
};
</script>
