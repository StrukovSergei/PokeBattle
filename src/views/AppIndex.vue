<template>
  <section>
    <!-- <app-filter></app-filter> -->

    <pokemons-pc-list :pokemons="pcPokemons" />
    <pokemons-list :pokemons="userPokemons" @choose-target="openDialog" />
    <choose-target-dialog v-if="showTargetDialog" @close="closeTargetDialog" @target-selected="handleTargetSelection" :pokemons="pcPokemons" />
  </section>
  <RouterView />
</template>

<script>
import pokemonsList from '../components/pokemons-list.vue'
import pokemonsPcList from '../components/pokemons-pc-list.vue'
import appFilter from './../components/app-filter.vue'
import chooseTargetDialog from '../components/choose-target-dialog.vue'


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
      pokemons: [],
      showTargetDialog: false,
      attacker: null,
      move: null,
    }
  },
  created() {
    // this.$store.dispatch({ type: 'loadItems' })
    this.$store.dispatch('loadPokemons')
  },
  methods: {
    openDialog(attackData) {
      this.attacker = attackData.attacker
      this.move = attackData.move
      this.showTargetDialog = true
    },
    handleTargetSelection(target) {
      console.log("🚀 ~ file: AppIndex.vue:47 ~ handleTargetSelection ~ target.hp:", target.hp)
      target.hp -= this.move.power
      console.log("🚀 ~ file: AppIndex.vue:47 ~ handleTargetSelection ~ target.hp:", target.hp)
      this.showTargetDialog = false
    },
    closeTargetDialog() {
      this.showTargetDialog = false
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
