<template>
  <section class="pokemon-preview">
    <div class="poke-sprite"><img :src="getImg" alt=""></div>
    <div class="poke-name">{{ pokemon.name }}</div>
    <div class="poke-class">{{ getTypes }}</div>
  </section>
</template>

<script>
export default {
  name: 'pokemon-preview',
  props: {
    pokemon: Object,
  },
  computed: {
    getImg() {
      return this.pokemon.sprite
    },
    getTypes() {
      return this.pokemon.type.join(', ')
    }
  }
}
</script>

<style></style>
