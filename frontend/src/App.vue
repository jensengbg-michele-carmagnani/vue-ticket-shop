<template>
  <div id="app">
    <div id="nav">
          <router-link to="/">Home</router-link>|
      <router-link to="/allevents">Concert </router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',

  beforeMount() {
    this.$store.dispatch('fetchEvents')
  },
}
</script>
export def

<style lang="scss">
body{
  background: #eee;
}

</style>
