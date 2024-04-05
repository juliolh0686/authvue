<template>
  <header>
    <p class="text__user">{{ 'User: '+store.user }}</p>
    <button @click="logout" class="button__logout">Logout</button>
  </header>
  <div class="containerLayout">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>

import useAuth from '@/stores/auth';
import router from '@/router';
import Swal from 'sweetalert2';

let store = useAuth()

const logout = async () => {
  try {
      const response = await store.logout()

      if(!response.status) {
        alert(response.message)
      }else {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: 'Exited the application',
          showConfirmButton: false,
          timer: 1500,
      })
        router.push({name: 'login'})
      }

    } catch (error) {
      alert(error)
    }

  }

</script>

<style scoped>
  
  header {
    display: flex;
    background:linear-gradient(45deg in oklab,#FF5722,#FC7C53,#FC7C53,#FF5722);
    justify-content: space-between;
    padding: 0 20px;
    height: 60px;
    align-items: center;
  }

  .button__logout {
    color: #FFF;
    background-color:#fcf1f14D;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    height: 40px;
    padding: 5px 15px;
    border-radius: 5px;
  }

  .button__logout:hover {
    color: #FFF;
    background-color:#fcf1f180;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    height: 40px;
    padding: 5px 15px;
    border-radius: 5px;
  }

  .text__user {
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
  }

</style>