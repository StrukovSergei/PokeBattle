<template>
  <div class="choose-target-modal center">
    <h2>Pokémon to attack</h2>
    <ul>
      <li v-for="pokemon in filteredPokemons" :key="pokemon.id">
        <button @click="selectTarget(pokemon)">{{ pokemon.name }}</button>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  props: {
    pokemons: Array, // PC's Pokémon list
    showDialog: Boolean,
  },
  computed: {
    filteredPokemons() {
      // Filter the Pokémon with HP greater than zero
      return this.pokemons.filter(pokemon => pokemon.hp > 0);
    },
  },
  methods: {
    selectTarget(pokemon) {

      // Emit the selected target to the parent component
      this.$emit('target-selected', pokemon)
    },
  },

}
</script>