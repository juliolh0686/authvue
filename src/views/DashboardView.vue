<template>
  
  <AppLayout>
    {{ 'Usuario: ' +store.user }}

    <div>
      <h1>Usuarios</h1>
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