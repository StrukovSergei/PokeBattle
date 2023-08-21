<template>
  <section :class="['pokemon-preview', { 'dead': isDead }]">
    <div class="poke-sprite"><img :src="getImg" alt=""></div>
    <div class="poke-name">{{ pokemon.name }}</div>
    <div class="poke-class">{{ getTypes }}</div>
    <div class="poke-hp">
      <div class="progress-bar-container">
        <div class="progress-bar" :style="{ width: getHpPercentage + '%', backgroundColor: getHpColor }"></div>
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
      return (this.pokemon.hp / this.pokemon.maxHp) * 100
    },
    getHpColor() {
      if (this.pokemon.hp <= 0) {
        return 'red'
      } else if (this.getHpPercentage <= 30) {
        return 'orange'
      } else {
        return '#66bb6a'
      }
    },
    isDead() {
      return this.pokemon.hp <= 0
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

