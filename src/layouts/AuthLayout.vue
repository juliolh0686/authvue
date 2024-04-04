<template>
  <div class="container">
    <div class="form__container">
      <div class="userimg">
        <slot name="image"></slot>
      </div>
      <div><p class="title"><slot name="title"></slot></p></div>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>

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
    margin-top: 20px;
  }

</style>