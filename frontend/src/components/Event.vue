<template>
  <article id="event" @click="goTo(singleEvent.id)">
    
        <section class="data">
           <p class="position date"> <span>{{singleEvent.date}}</span></p>
        </section>
        <section class="info">
              <p class="position name"><span>Name</span> <span>{{singleEvent.name}}</span></p>
              <p class="position time"><span>Time:</span> <span>{{singleEvent.timeIn}}</span></p>
              <p class="position location"><span>@</span><span>{{singleEvent.location}}</span></p>
              <p class="position price"><span>Price</span><span>{{singleEvent.price}}</span></p>
              
        </section>
      
   
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
  this.$router.push(`/allevents/${id}`)

},

  
},
computed: {
 
},
}
</script>

<style lang="scss">
  
 
</style>>

