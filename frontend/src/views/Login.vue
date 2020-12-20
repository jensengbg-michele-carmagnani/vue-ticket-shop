<template>
  <section id="login">
    <article class="header">
        <figure>
          <img src="../assets/staff.png" alt="staff">
        </figure>
        <h1 class="text"> Where it's @</h1>
        <h2 class="staff"> Staff</h2>
    </article>
    <article class="input-login">
     <input class="input" v-model="loginInfo.username" type="text " placeholder="username">
      <input class="input" v-model="loginInfo.password" type="password" placeholder="password ">
    
    </article>

  </section>
</template>

<script>
export default {
  name:'Login',
 data(){
   return{
     loginInfo:{
       username:"",
       password:""
     }
   }
 },

 methods: {
   login(){
     this.$store.dispach('login', loginInfo)
   }
 },
}
</script>

<style>

</style>