<template>
  <article id="info" @click.prevent="goTo(singleEvent.id)">
    
        
        <p class="name">Singer {{singleEvent.name}}</p>
        <span class="time">Time {{singleEvent.time}}</span>
        <p class="location">@{{singleEvent.location}}</p>
        <p class="price">Price{{singleEvent.price}}</p>
        <p class="price">id {{singleEvent.id}}</p>
       
      
   
  </article>
</template>

<script>

export default {
  name: 'Event',
  props:{
    singleEvent:Object,
  },

methods: {
 goTo(id){
  this.$router.push(`/infoTicket/${id}`)

},

  
},
computed: {
 
},
}
</script>

<style lang="scss">
  #info{
    border: black solid 1px;
    
  }
 
</style>>

