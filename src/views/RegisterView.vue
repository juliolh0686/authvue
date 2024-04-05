<template>
  <AuthLayout>
    <template #image>
      <img :src=userImg alt="">
    </template>
    <template #title>
      Register
    </template>
    <template #content>
      <form class="form">
        <input type="text" placeholder="Enter your name" class="form__control form__control--text" v-model="RegisterUser.name">
        <input type="text" placeholder="Enter your last name" class="form__control form__control--text" v-model="RegisterUser.lastname">
        <input type="text" placeholder="Enter your email address" class="form__control form__control--text" v-model="RegisterUser.email">
        <input type="password" placeholder="Enter Your password" class="form__control form__control--text" v-model="RegisterUser.password">
        <input type="password" placeholder="Enter confirm password" class="form__control form__control--text" v-model="RegisterUser.confirmPassword">
        <button class="form__control form__control--btn" @click.prevent='register'>Sign up</button>
        <div class="container__text">already have account? <router-link to="/" >Sign in</router-link></div>
      </form>
    </template>
  </AuthLayout>
</template>

<script lang="ts" setup>
  import { type Ref, ref } from 'vue'
  import useAuth from '@/stores/auth'
  import AuthLayout from '@/layouts/AuthLayout.vue'
  import type IUser from '@/interfaces/IUser'
  import router from '@/router'
  import userImg from '@/assets/img/register.png'
  import Swal from 'sweetalert2'

  const store = useAuth()

  let RegisterUser:Ref<IUser> = ref({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const errores = ref<String[]>([]);
    
  const register = async () => {

    if (RegisterUser.value.name === '') errores.value.push('The name is required')
    if (RegisterUser.value.lastname === '') errores.value.push('The Last Name is required')
    if (RegisterUser.value.email === '') errores.value.push('The email is required')
    if (RegisterUser.value.password === '') errores.value.push('The Password ir required')
    if (RegisterUser.value.confirmPassword === '') errores.value.push('Confirming password is required')
    if (!(RegisterUser.value.password === RegisterUser.value.confirmPassword)) errores.value.push('Passwords are not the same')

    if(errores.value.length > 0) {
        Swal.fire({
          icon: 'warning',
          confirmButtonColor: "#E64A19",
          text: errores.value
        })
      errores.value.splice(0)
    } else {

      try {

      const response = await store.register(RegisterUser.value.name,RegisterUser.value.lastname,RegisterUser.value.email,RegisterUser.value.password)

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
          title: response.message,
          showConfirmButton: false,
          timer: 1500
      })
        router.push({name: 'dashboard'})
      }

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