<template>
  <section id="info-ticket" >
      <article class="message">
        <p class="message">You are about to score <br> some tickets to</p>
      </article>
        <p class="name">{{infoEvent.name}}</p>

      <article class="time">
        <span>Event's time : {{infoEvent.timeIn}}</span>-<span>{{infoEvent.timeOut}}</span>
      </article>
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