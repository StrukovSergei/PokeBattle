<template>
  <section>
    <!-- <app-filter></app-filter> -->

    <pokemons-pc-list :pokemons="pcPokemons" />
    <pokemons-list :pokemons="userPokemons" @choose-target="openDialog" />
    <choose-target-dialog :pcPokemons="pcPokemons" :showDialog="dialogVisible" @target-selected="handleTargetSelection" />
  </section>
  <RouterView />
</template>

<script>
import pokemonsList from '../components/pokemons-list.vue'
import pokemonsPcList from '../components/pokemons-pc-list.vue'
import appFilter from './../components/app-filter.vue'
import chooseTargetDialog from './../components/choose-target-dialog.vue'


export default {
  name: 'pokemons-app',
  components: {
    pokemonsList,
    pokemonsPcList,
    appFilter,
    chooseTargetDialog,
  },
  data() {
    return {
      dialogVisible: false,
      currentAttacker: null,
      currentMove: null,
    }
  },
  created() {
    // this.$store.dispatch({ type: 'loadItems' })
    this.$store.dispatch('loadPokemons')
  },
  methods: {
    openDialog(attackData) {
      this.currentAttacker = attackData.attacker
      this.currentMove = attackData.move
      this.dialogVisible = true
    },
    handleTargetSelection(selectedTarget) {
      // Handle attack logic here using this.currentAttacker, this.currentMove, and selectedTarget
      this.dialogVisible = false
    },
  },


  computed: {
    pcPokemons() {
      // Return the first 3 pokemons in the array
      return this.$store.getters.getPokemons?.slice(0, 3)
    },
    userPokemons() {
      // Return the last 3 pokemons in the array
      return this.$store.getters.getPokemons?.slice(-3)
    },

  },
}
</script>

<style></style>
