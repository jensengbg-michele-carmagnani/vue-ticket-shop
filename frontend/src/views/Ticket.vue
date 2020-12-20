<template>
  <section id="ticket">  
      <section class="content">
        
        <article class="location">
           <p class="location">@{{ticket.location}}</p>
        <p class="name">name:{{ticket.name}}</p>
        </article>
        <article class="time">
            <p class="time">time:{{ticket.time}}</p>
            <p class="price">date prochouse: {{ticket.date}}</p>
         </article>
        <article class="ticket">
          <figure class="barcode">
            <img src="../assets/barcode.png" alt="">
          </figure>
        <p class="ticket-number"> {{ticket.ticketNumber}}</p>
        </article>
      </section>
      
      <button class="go-back" @click="goBack()">goBack</button>
    


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
      this.$router.push('/')
      
    },
   
  },

}
</script>

<style>

</style>