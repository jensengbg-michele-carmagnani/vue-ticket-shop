<template>
 <section id="allevents">
   <Event v-for="(event, index) in allEvents" :key="index" :singleEvent="event" @click.prevent="goTo" />
 </section>
</template>

<script>
// @ is an alias to /src

import Event from "@/components/Event";
export default {
  name: 'AllEvents',
  props:{
    allEvents:Array
  },
  components: {
    Event,
  },
  computed: {
 
  },
  methods: {

    
  },
}
</script>
