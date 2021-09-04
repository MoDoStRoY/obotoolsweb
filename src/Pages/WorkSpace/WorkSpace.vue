<template>
  <div id="mainBlock">
    <hatBar></hatBar>
    <ul id="toolBox">
      <li><h4>OBO Tech</h4>
      <li><button>Корректировка платежей</button>
      <li><h4>OBO Admin</h4>
      <li><button>Запросы по дилерам</button>
      <li><h4>OBO ALL</h4>
      <li><button>Счётчик косяков</button></li>
    </ul>
  </div>
</template>

<script>
import hatBar from "../Components/hatBar.vue";

export default
{
  name: "workspace",
  components: {hatBar}
}

</script>

<style scoped>

ul
{
  list-style-type: none;
  padding-left: 0;
  line-height: 1%;
}

li
{
  margin-bottom: 1%;
}

</style>