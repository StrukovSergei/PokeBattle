<template>
  <section class="item-preview">
    <!-- <RouterLink :to="`/item/${item._id}`">
      {{ item.content }}
    </RouterLink> -->

    {{ pokemon.name }}
  </section>
</template>

<script>
export default {
  name: 'pokemon-preview',
  props: {
    pokemon: Object,
  },
}
</script>

<style></style>
