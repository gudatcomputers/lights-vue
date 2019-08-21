<template>
  <div>
    <label>{{ statusLabel }}</label>
    <button @click="lightButtonClicked">Push me</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HomePage',
  data () {
    return {
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
      this.updateLightState(this.isLightOn)
    }
  }
}
</script>
