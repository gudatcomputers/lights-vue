<template>
  <div>
    <p>Status: {{ statusLabel }}</p>
    <button @click="lightButtonClicked">Push me</button>
    <p>Hue: <input id="hue" v-model="hue" /></p>
    <p>Saturation: <input id="saturation" v-model="saturation" /></p>
    <p>Brightness: <input id="brightness" v-model="brightness" /></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomePage',
  data () {
    return {
      hue: undefined,
      saturation: undefined,
      brightness: undefined,
      isLightOn: false
    }
  },
  computed: {
    statusLabel () {
      return this.isLightOn ? 'On' : 'Off'
    }
  },
  methods: {
    ...mapActions(['updateLightState']),
    lightButtonClicked () {
      this.isLightOn = !this.isLightOn
      this.updateLightState({
        isLightOn: this.isLightOn,
        hue: this.hue,
        sat: this.saturation,
        bri: this.brightness
      })
    }
  }
}
</script>
<style lang="scss">
  p {
    color :red;
  }
</style>
