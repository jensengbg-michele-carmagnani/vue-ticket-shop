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
      <button class="btnLogin" @click="login(loginInfo)">Login</button>
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
     },
     userRole:{
       role:""
     }
   }
 },

 methods: {
   async login(loginInfo){
    await this.$store.dispatch('login',loginInfo)
      
      // let role = sessionStorage.getItem('userInfo');
      

       console.log('role',  this.role)
        if(this.role =='admin'){
          this.getToAdmin()
        }else{
          this.getToTicketCheck()
        }
        
       
      },
    getToAdmin(){
    this.$router.push('/admin')
    },
    getToTicketCheck(){
      this.$router.push('/ticketCheck')
    },
    
    

 
 },
 computed:{
   role(){
        let role = this.$store.getters.getUserRole
        return role
   }
 }
 
}
</script>

<style>

</style>