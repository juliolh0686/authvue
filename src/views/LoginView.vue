<template>

<AuthLayout>
  <template #image>
    <img :src=userImg alt="">
  </template>
  <template #title>
    Welcome Back!
  </template>
  <template #content>
    <form class="form">
      <input type="text" placeholder="Enter your email address" class="form__control form__control--text" v-model="email">
      <input type="password" placeholder="Enter Your password" class="form__control form__control--text" v-model="password">
      <div class="container__text">
        <div class="container__text--aling"><input type="checkbox" name="" id=""><label class="espacing__left">Remember me</label></div>
        <router-link to="/recovery" >Forgot password?</router-link>
      </div>  
      <button class="form__control form__control--btn" @click.prevent='login'>Sign in</button>
      <div class="container__text"><p>Dont't have an account?</p><router-link to="/register">Register</router-link></div>
      <div class="social"><img :src="faceImg" alt=""><img :src="googleImg" alt=""><img :src="instImg" alt=""></div>
    </form>
  </template>
  
</AuthLayout>

</template>

<script lang="ts" setup>
  
  import useAuth from '@/stores/auth'
  import { ref } from 'vue'
  import AuthLayout from '@/layouts/AuthLayout.vue'
  import router from '@/router'
  import Swal from 'sweetalert2'

  import userImg from '@/assets/img/login.png'
  import faceImg from '@/assets/img/facebook.png'
  import googleImg from '@/assets/img/google.png'
  import instImg from '@/assets/img/instagram.png'

  const store = useAuth()
  let email = ref('jsamaniego@gmail.com')
  let password = ref('12345')


  const login = async () => {

    try {
      const response = await store.login(email.value,password.value)

      if(!response.status) {
        Swal.fire({
        icon: 'warning',
        confirmButtonColor: "#E64A19",
        text: response.message,
      })
      }else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: 'Welcome '+response.resultado.name,
          showConfirmButton: false,
          timer: 1500
      })

      router.push({name: 'dashboard'})

      }

    } catch (error) {
      alert(error)
    }
    
  }
</script>

<style scoped>
  
  .espacing__left {
    margin-left: 5px;
  }

  .container__text--aling {
    align-content: center;
  }

  router-link {
    text-decoration: none;
    color: aliceblue;
  }

  .social {
    display: flex;
    margin-top: 25px;
    justify-content: space-evenly;
  }

  .social img {
    cursor: pointer;
  }

</style>