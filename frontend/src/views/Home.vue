<template>
  <section id="home">
    <h1>Welcome to where it's @</h1>
    <h2>We corrently have {{concerts}} concerts available ! </h2>
    <h3>Make your choice</h3>
  </section>
</template>

<script>
export default {
  name:"Home",
  computed: {
    concerts(){
      return this.$store.getters.concertsCount
    }
  },
}
</script>

<style lang="scss">


</style>