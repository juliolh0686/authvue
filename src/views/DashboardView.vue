<template>
  
  <AppLayout>
    <div class="container__central">
      <h1 class="title__user">Listado de Usuarios</h1>
      <table>
        <tr>
        <th>Name</th>
        <th>Last Name</th>
        <th>Email</th>
        </tr>
        <tr v-for="user in store.users">
        <td>{{ user.name }}</td>
        <td> {{ user.lastName }}</td>
        <td>{{ user.email }}</td>
        </tr>
      </table>
    </div>
  </AppLayout>

</template>

<script lang="ts" setup>
  import AppLayout from '@/layouts/AppLayout.vue';
  import useAuth from '@/stores/auth';

  let store = useAuth()


</script>

<style>
  .container__central {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
  }

  table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #757575;
  }
  th, td {
    padding: 10px;
    border: 1px solid #757575;
  }

  .title__user {
    text-align: center;
    padding: 15px;
  }
</style>