<template>
    <div>
      <dialog :show="showDialog">
        <h2>Select a target Pokémon:</h2>
        <ul>
          <li v-for="pokemon in pcPokemons" :key="pokemon.id">
            <button @click="selectTarget(pokemon)">{{ pokemon.name }}</button>
          </li>
        </ul>
      </dialog>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      pcPokemons: Array, // PC's Pokémon list
      showDialog: Boolean,
    },
    methods: {
      selectTarget(pokemon) {
        // Emit the selected target to the parent component
        this.$emit('target-selected', pokemon);
      },
    },
  };
  </script>