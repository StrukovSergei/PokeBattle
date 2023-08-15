<template>
  <section class="pokemon-preview">
    <div class="poke-sprite"><img :src="getImg" alt=""></div>
    <div class="poke-name">{{ pokemon.name }}</div>
    <div class="poke-class">{{ getTypes }}</div>
    <div class="poke-hp">
      <el-progress :text-inside="true" :stroke-width="getHpBarWidth" :percentage="getHpPercentage"
        :status="getHpStatus" />
    </div>
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
    },
    getHpPercentage() {
      return (this.pokemon.hp / this.pokemon.maxHp) * 100
    },
    getHpBarWidth() {
      // You can adjust this value to control the thickness of the progress bar
      return 20
    },
    getHpStatus() {
      if (this.getHpPercentage > 75) {
        return 'success'
      } else if (this.getHpPercentage > 50) {
        return 'warning'
      } else {
        return 'exception'
      }
    },
  }
}
</script>

<style>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
