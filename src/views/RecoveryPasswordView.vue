<template>
  <AuthLayout>
    <template #image>
      <img :src=userImg alt="">
    </template>
    <template #title>
      Recovery Password
    </template>
    <template #content>
      <input type="text" placeholder="Enter your email address" class="form__control form__control--text" v-model="name">
      <button class="form__control form__control--btn" @click.prevent='login'>Sign up</button>
      <div class="container__text"><p>already have account?</p><router-link to="/" >Sign in</router-link></div>
    </template>
  </AuthLayout>
</template>
<script lang="ts" setup>

import AuthLayout from '@/layouts/AuthLayout.vue'
import userImg from '@/assets/img/recovery.png'

</script>

<style scoped>
  
</style>