<template>
  <section class="ticket">  
     <p class="message">You are about to score <br> some tickets to</p>
        <p class="name">name:{{getTicket.name}}</p>
        <span class="time">time:{{getTicket.time}}</span>
        <p class="location">@{{getTicket.location}}</p>
        <p class="price">€{{getTicket.price}}</p>
        <p class="price">€{{getTicket.ticketNumber}}</p>
      <button class="goBack" @click="goBack()">goBack</button>


  </section>
</template>

<script>
export default {
  name:"ticket",
 
  computed: {
    getTicket(){
     return this.$store.getters.ticket
    }
  },
  methods: {
    goBack(){
      this.$router.push('/allevents')
      
    },
   
  },

}
</script>

<style>

</style>