<template>
  <section class="app-home">
    <h1>home component</h1>
    <p>Open your console!</p>
    <!-- <img :src="new URL(item.imgUrl, import.meta.url).href" alt=""> -->
    <!-- <h2>{{ getMsg }}</h2>
    <pre>{{ getPokemons }}</pre> -->
    <RouterLink class="play-btn" to="/game">PLAY!</RouterLink>

  </section>
</template>

<script>
export default {
  name: 'app-home',
  // created() {
  //   this.$store.dispatch('loadPokemons')
  // },
  // computed: {
  //   getMsg() {
  //     return this.$store.getters.getMsg
  //   },
  //   getPokemons() {
  //     return this.$store.getters.getPokemons
  //   }
  // },
  // methods: {
  //   async loadPokemons() {
  //     await this.$store.dispatch('loadPokemons')
  //   },

  // }
}
</script>
