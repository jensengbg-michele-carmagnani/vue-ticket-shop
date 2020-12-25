<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>|
      <router-link to="/allevents">Concert </router-link> -->
    </div>
    <router-view :allEvents="allEvents"/>
  </div>
</template>
<script>
export default {
  name: 'app',

  beforeMount() {
    this.$store.dispatch('fetchEvents')
    this.$state.dispatch('checkState')
  },
  computed: {
    allEvents(){
    return this.$store.state.allEvents
  }
  },
}
</script>
export def

<style lang="scss">
  
  @import "./scss/main";

</style>
