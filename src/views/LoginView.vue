<template>
  <div class="container">
    <div class="form__container">
      <div class="userimg"><img :src=userImg alt=""></div>
      <div><p class="title">Welcome Back!</p></div>
      <form class="form">
        <input type="text" placeholder="Enter your email address" class="form__control form__control--text">
        <input type="password" placeholder="Enter Your password" class="form__control form__control--text">
        <div>
          <label><input type="checkbox" name="" id="">Remember me</label>
          <a href="">Forgot password?</a>
        </div>
        <button class="form__control form__control--btn">Sign in</button>
        <div>Dont't have an account? Register</div>
      </form>
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
    height: 500px;
    border-radius: 5px;
    background-color:#fcf1f11A;
    margin: 0 auto;
    padding: 30px;
  }
  .form {
    display: flex;
    flex-direction: column;
  }

  .form__control {
    width: 100%;
    height: 50px;
    padding: 5px 30px;
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 6px;
  }

  input::placeholder {
    color: #757575;
    
  }

  input:focus::placeholder {
    color: #FFF;
  }

  .form__control--text {
    background-color: #FFFFFF1A;
    border: solid 1px #FFCCBC;
    color: #FFF;
  }

  .form__control--text:focus {
    border: solid 1px #FFCCBC;
    background-color: #FFFFFF33;
    color: #21212180;
    font-weight: bold;
  }

  .form__control--btn {
    color: #FFF;
    background-color: #E64A19CC;
    font-weight: bold;
    cursor: pointer;
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
    width: 150px;
  }

</style>