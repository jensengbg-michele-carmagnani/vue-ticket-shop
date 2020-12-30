<template>
  <section id="ticketCheck">
    <article class="header">
        <figure>
          <img src="../assets/staff.png" alt="staff">
        </figure>
        <h1 class="text"> Where it's @</h1>
        <h2 class="staff"> Staff</h2>
    </article>
    <article class="input-login">
     <input class="input" v-model="ticketNumeber.code" type="text " placeholder="ticket code">
      
    </article>
      <button class="login" @click="login(loginInfo)">Login</button>

  </section>
</template>

<script>
export default {
  name: 'TicketCheck',
  data(){
    return{
      ticketNumeber:{
        code:""
      }
    }
  }

}
</script>

<style>

</style>