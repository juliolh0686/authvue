<template>
  <AuthLayout>
    <template #image>
      <img :src=userImg alt="">
    </template>
    <template #title>
      Recovery Password
    </template>
    <template #content>
      <input type="text" placeholder="Enter your email address" class="form__control form__control--text" v-model="email">
      <button class="form__control form__control--btn" @click.prevent='recoveryPassword'>Recover Password</button>
      <div class="container__text"><p>already have account?</p><router-link to="/" >Sign in</router-link></div>
    </template>
  </AuthLayout>
</template>
<script lang="ts" setup>

import { ref } from 'vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import userImg from '@/assets/img/recovery.png'
import Swal from 'sweetalert2'
import useAuth from '@/stores/auth'

let email = ref('')

const store = useAuth()

let recoveryPassword = () => {

  if(!store.regexCorreo.test(email.value)) {
    Swal.fire({
    icon: 'warning',
    confirmButtonColor: "#E64A19",
    text: 'Enter email or invalid email'
  })
  }else {
    Swal.fire({
    icon: 'info',
    confirmButtonColor: "#E64A19",
    text: 'Email sent'
  })
  }

  
}


</script>

<style scoped>
  
</style>