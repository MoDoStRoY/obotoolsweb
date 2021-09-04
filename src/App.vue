<template>
  <div id="mainBlock">
    <hatBar></hatBar>
    <ul id="authorizationBlock">
      <li><input id="login" placeholder="Логин"></li>
      <li><input id="password" placeholder="Пароль"></li>
      <li><button v-on:click="loginTest">Войти</button></li>
      <li><button>Регистрация</button></li>
    </ul>>
  </div>

</template>

<script>

import hatBar from "./Pages/Components/hatBar.vue";

export default
{
  name: "app",
  components: {hatBar},
  methods: {
    loginTest:
        function loginTest()
        {
          //window.history.length > 1 ? this.$router.go(+1) : this.$router.push('/')
          //this.$router.push('workSpace')
          window.location.href = "http://192.168.0.101:8080/workSpace";
        }
  }
}

</script>

<style scoped>

#authorizationBlock
{
  list-style-type: none;
  margin-top: 20%;
  margin-left: 40%;
  line-height: 1%;
}

li
{
  margin-bottom: 1%;
}

h1
{
  color: gray;
}

input
{
  width: 20%;
  text-align: center;
}

button
{
  width: 21%;
}

</style>