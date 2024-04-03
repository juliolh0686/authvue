<template>
  <AuthLayout>
    <template #title>
      Recovery Password
    </template>
    <template #content>
      <input type="text" placeholder="Enter your email address" class="form__control form__control--text" v-model="name">
      <button class="form__control form__control--btn" @click.prevent='login'>Sign up</button>
      <div>already have account? <router-link to="/" >Sign in</router-link></div>
    </template>
  </AuthLayout>
</template>
<script lang="ts" setup>

import AuthLayout from '@/layouts/AuthLayout.vue'

</script>

<style scoped>
  
</style>