<template>
  <div id="mainBlock">
    <hatBar></hatBar>
    <ul id="toolBox">
      <li><textarea>OBO Tech</textarea>
      <li><button>Корректировка платежей</button>
      <li><textarea>OBO Admin</textarea>
      <li><button>Запросы по дилерам</button>
      <li><textarea>OBO ALL</textarea>
      <li><button>Счётчик косяков</button>
    </ul>
  </div>
</template>

<script>
import hatBar from "@/Pages/Components/hatBar";

export default
{
  name: "WorkSpace",
  components: hatBar
}

</script>

<style scoped>

ul
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

</style>