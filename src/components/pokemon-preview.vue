<template>
  <section class="item-preview">
    {{ pokemon.name }}
    {{ pokemon.type }}
    <img :src="getImg" alt="">
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
    }
  }
}
</script>

<style></style>
