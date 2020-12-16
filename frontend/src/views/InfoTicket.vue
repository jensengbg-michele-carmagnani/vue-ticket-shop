<template>
  <section id="display-ticket" >
        <p class="message">You are about to score <br> some tickets to</p>
        <p class="name">name:{{infoEvent.name}}</p>
        <span class="time">time:{{infoEvent.timeIn}}</span>
        <p class="location">@{{infoEvent.location}}</p>
        <p class="price">€{{infoEvent.price}}</p>
         <button class="buy-ticket" id="buy" @click.prevent="goToTicket()">Buy it</button>

  </section>
</template>

<script>
export default {
  name:'InfoTicket',
  props:{
    allEvents:Array
  },
 
  computed: {
     infoEvent(){
          return this.allEvents.filter(event => event.id == this.$route.params.id)[0]

     }, 
  },
    methods: {
     

      goToTicket(){
        this.$router.push('/ticket')
        this.setTicket(this.ticket)
      },
      setTicket(){
        this.$store.dispatch('buyTicket')
      }
    }
}
</script>

<style>

</style>