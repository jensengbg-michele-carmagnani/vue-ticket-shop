<template>
  <section id="info-ticket" >
        <p class="message">You are about to score <br> some tickets to</p>
        <p class="name">name:{{infoEvent.name}}</p>
        <span class="time">time:{{infoEvent.timeIn}}</span>
        <p class="location">@{{infoEvent.location}}</p>
        <p class="price">€{{infoEvent.price}}</p>
         <button class="buy-ticket" id="buy" @click="buyTicket(infoEvent)">Buy it</button>

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
     

      buyTicket(data){
        this.setTicket(data),
        this.$router.push(`/ticket`)

        
      },
      setTicket(ticket){
        this.$store.dispatch('buyTicket',ticket)
      }
    }
}
</script>

<style>

</style>