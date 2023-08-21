<template>
  <section class="pokemon-preview">
    <div class="poke-sprite"><img :src="getImg" alt=""></div>
    <div class="poke-name">{{ pokemon.name }}</div>
    <div class="poke-class">{{ getTypes }}</div>
    <div class="poke-hp">
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: getHpPercentage + '%' }"></div>
      </div>
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

    getHpPercentage() {
      console.log(this.pokemon.hp)
      return (this.pokemon.hp / this.pokemon.maxHp) * 100
    },
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
.progress-bar-container {
  background-color: #ccc;
  height: 20px;
  border-radius: 10px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background-color: #66bb6a;
  transition: width 0.3s;
}
</style>