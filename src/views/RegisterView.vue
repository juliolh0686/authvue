<template>
  <AuthLayout>
    <template #title>
      Register
    </template>
    <template #content>
      <form class="form">
        <input type="text" placeholder="Enter your name" class="form__control form__control--text" v-model="name">
        <input type="text" placeholder="Enter your last name" class="form__control form__control--text" v-model="lastname">
        <input type="text" placeholder="Enter your email address" class="form__control form__control--text" v-model="email">
        <input type="password" placeholder="Enter Your password" class="form__control form__control--text" v-model="password">
        <input type="confirmPassword" placeholder="Enter confirm password" class="form__control form__control--text" v-model="confirmPassword">
        <button class="form__control form__control--btn" @click.prevent='register'>Sign up</button>
        <div>already have account? <router-link to="/" >Sign in</router-link></div>
      </form>
    </template>
  </AuthLayout>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import useAuth from '@/stores/auth'
  import AuthLayout from '@/layouts/AuthLayout.vue'

  const store = useAuth()

  let name = ref('')
  let lastname = ref('')
  let email = ref('')
  let password = ref('')
  let confirmPassword = ref('')


  const register = async () => {

    if(!password.value==confirmPassword.value){
      alert('error correos no son iguales')
    }else {

      try {
      const response = await store.register(name.value,lastname.value,email.value,password.value)

      // if(!response.status) {
      //   alert(response.message)
      // }else {
      //   alert("Bienvenido "+response.resultado.name)
      //   router.push({name: 'dashboard'})
      // }

        } catch (error) {
          alert(error)
        }

      }
      
    }

    

</script>

<style scoped>
  .form {
    display: flex;
    flex-direction: column;
  }
</style>