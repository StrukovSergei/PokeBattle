<template>
  <section :class="['pokemon-preview', { 'dead': isDead }]">
    <div class="poke-sprite"><img :src="getImg" alt=""></div>
    <div class="poke-name">{{ pokemon.name }}</div>
    <div class="poke-class">
      <div v-for="type in pokemon.type" :key="type" :title=type>
        <i v-html="$svg(type)"></i>

      </div>
    </div>
    <div class="poke-hp">
      <div class="progress-bar-container">
        <div class="progress-bar" :style="getProgressBarStyle"></div>
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

    getHpPercentage() {
      return (this.pokemon.hp / this.pokemon.maxHp) * 100
    },
    getHpColor() {
      if (this.getHpPercentage <= 30) {
        return 'orange'
      } else {
        return '#66bb6a'
      }
    },
    isDead() {
      return this.pokemon.hp <= 0
    },
    getProgressBarStyle() {
      if (this.isDead) {
        return {
          width: '100%',
          height: '4px',
          backgroundColor: 'red'
        }
      } else {
        return {
          width: this.getHpPercentage + '%',
          backgroundColor: this.getHpColor
        }
      }
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

