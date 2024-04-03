<template>
  <div class="container">
    <div class="form__container">
      <div class="userimg"><img :src=userImg alt=""></div>
      <div><p class="title"><slot name="title"></slot></p></div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import userImg from "@/assets/img/user.png"

</script>

<style scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background:linear-gradient(45deg in oklab,#FF5722,#FC7C53,#FC7C53,#FF5722);
    align-content: center;
  }

  .form__container {
    width: 400px;
    border-radius: 5px;
    background-color:#fcf1f11A;
    margin: 0 auto;
    padding: 30px;
  }

  .title {
    color: #fff;
    font-weight: bold;
    text-align: center;
    font-size: 25px;
  }

  .userimg {
    text-align: center;
  }

  .userimg img {
    border-radius: 50%;
    width: 100px;
  }

</style>