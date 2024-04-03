<template>

<AuthLayout>
  <template #title>
    Welcome Back!
  </template>
  <template #content>
    <form class="form">
      <input type="text" placeholder="Enter your email address" class="form__control form__control--text" v-model="email">
      <input type="password" placeholder="Enter Your password" class="form__control form__control--text" v-model="password">
      <div>
        <label><input type="checkbox" name="" id="">Remember me</label>
        <router-link to="/recovery" >Forgot password?</router-link>
      </div>  
      <button class="form__control form__control--btn" @click.prevent='login'>Sign in</button>
      <div>Dont't have an account? <router-link to="/register" >Register</router-link></div>
    </form>
  </template>
  
</AuthLayout>

</template>

<script lang="ts" setup>
  
  import useAuth from '@/stores/auth'
  import { ref } from 'vue'
  import AuthLayout from '@/layouts/AuthLayout.vue'
  import router from '@/router'

  const store = useAuth()
  let email = ref('')
  let password = ref('')


  const login = async () => {

    try {
      const response = await store.login(email.value,password.value)

      if(!response.status) {
        alert(response.message)
      }else {
        alert("Bienvenido "+response.resultado.name)
        router.push({name: 'dashboard'})
      }

    } catch (error) {
      alert(error)
    }
    
  }
</script>

<style scoped>
  
  

</style>