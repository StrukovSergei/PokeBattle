<template>
  <section>
    <pokemons-pc-list :pokemons="pcPokemons" />
    <pokemons-list :pokemons="userPokemons" @choose-target="openDialog" />
    <choose-target-dialog
      :pcPokemons="pcPokemons"
      :showDialog="dialogVisible"
      @target-selected="handleTargetSelection"
    />
  </section>
  <RouterView />
</template>

<script>
import pokemonsList from '../components/pokemons-list.vue';
import pokemonsPcList from '../components/pokemons-pc-list.vue';
import chooseTargetDialog from '../components/choose-target-dialog.vue';

export default {
  name: 'pokemons-app',
  components: {
    pokemonsList,
    pokemonsPcList,
    chooseTargetDialog,
  },
  data() {
    return {
      pcPokemons: [], // PC's Pokémon list
      userPokemons: [], // User's Pokémon list
      dialogVisible: false,
      currentAttacker: null,
      currentMove: null,
    };
  },
  created() {
    this.$store.dispatch('loadPokemons'); // Load Pokémon data
    // Initialize pcPokemons and userPokemons arrays
  },
  methods: {
    openDialog(attackData) {
      this.currentAttacker = attackData.attacker;
      this.currentMove = attackData.move;
      this.dialogVisible = true;
    },
    handleTargetSelection(selectedTarget) {
      // Handle attack logic here using this.currentAttacker, this.currentMove, and selectedTarget
      this.dialogVisible = false;
    },
  },
};
</script>

<style></style>
