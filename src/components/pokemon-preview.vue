<template>
  <section class="pokemon-preview">
    <div class="poke-sprite"><img :src="getImg" alt=""></div>
    <div class="poke-name">{{ pokemon.name }}</div>
    <div class="poke-class">{{ getTypes }}</div>
    <div class="poke-hp demo-progress">
      <el-progress :text-inside="true" :stroke-width="20" :percentage="getPrecentage" :status="getHpStatus" />
    </div>
    <div class="poke-moves ">
      <button v-for="move in pokemon.moves" :key="move.name" @click="attack(move)">
        {{ move.name }}
      </button>
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
    getHpStatus() {
      return 'success'
    },
    getPrecentage(){
      return this.pokemon.hp
    }
  },
  methods: {
    attack(move) {
      // Trigger the attack logic here
      this.$emit('attack', { attacker: this.pokemon, move })
    },
  }
}
</script>

<style>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 150px;
}
</style>
