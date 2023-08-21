<template>
  <div>

      <h2>Select a target Pokémon:</h2>
      <ul>
        <li v-for="pokemon in pokemons" :key="pokemon.id">
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
  methods: {
    selectTarget(pokemon) {
      // Emit the selected target to the parent component
      this.$emit('target-selected', pokemon);
    },
  },
  created(){
  console.log(this.pokemons)
}
  }
</script>