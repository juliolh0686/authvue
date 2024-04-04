<template>
  <div class="containerLayout">
    <button @click="logout">logout</button>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

import useAuth from '@/stores/auth';
import router from '@/router';

let store = useAuth()

const logout = async () => {
  try {
      const response = await store.logout()

      if(!response.status) {
        alert(response.message)
      }else {
        alert("se cerro sesion")
        router.push({name: 'login'})
      }

    } catch (error) {
      alert(error)
    }

  }

</script>

<style scoped>
  
</style>