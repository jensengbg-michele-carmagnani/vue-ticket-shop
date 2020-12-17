<template>
  <section id="ticket">  
     <p class="message">You are about to score <br> some tickets to</p>
        <p class="name">name:{{ticket.name}}</p>
        <p class="time">time:{{ticket.time}}</p>
        <p class="location">@{{ticket.location}}</p>
        <p class="price">€{{ticket.price}}</p>
        <p class="price">date prochouse: {{ticket.date}}</p>
        <p class="ticket-number">ticket number: {{ticket.ticketNumber}}</p>
      <button class="goBack" @click="goBack()">goBack</button>


  </section>
</template>

<script>
export default {
  name:"ticket",

  computed: {
    ticket(){
      return this.$store.getters.ticket
    
    }
  },
  methods: {
  

    goBack(){
      this.$store.commit('cleanTicket')
      this.$router.push('/allevents')
      
    },
   
  },

}
</script>

<style>

</style>