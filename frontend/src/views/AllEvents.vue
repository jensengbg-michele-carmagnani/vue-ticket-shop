<template>
 <section class="allevents">
   <Event v-for="(event, index) in allEvents" :key="index" :singleEvent="event" @click.prevent="goTo" />
 </section>
</template>x

<script>
// @ is an alias to /src

import Event from "@/components/Event";
export default {
  name: 'AllEvents',
  components: {
    Event,
  },
  computed: {
    allEvents(){
    return this.$store.state.allEvents
  }
  },
  methods: {

    
  },
}
</script>
