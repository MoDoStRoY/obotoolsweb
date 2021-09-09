<template>
  <div id="mainBlock">
    <hatBar></hatBar>
    <section id="leftBlock">
      <ul id="toolBox">
        <li><h4>OBO Tech</h4>
        <li><button v-on:click="openPaymentCorrection()">Корректировка платежей</button>
        <li><h4>OBO Admin</h4>
        <li><button disabled>Запросы по дилерам</button>
        <li><h4>OBO ALL</h4>
        <li><button disabled>Счётчик косяков</button>
        <li><button disabled>Рассчёт временных промежутков</button>
        <li><button disabled>Конвертация часовых поясов</button>
        <li><button v-on:click="openChat()">Чат</button></li>
      </ul>
    </section>

    <section id="centerBlock">
      <p>OBO Tools Web - это WEB версия органайзера несложных алгоритмов для упрощения работы специалистов подразделений OBO.</p>

      <p>Программа является внутренней разработкой OBO Tech ЧКЦ, поэтому по любым вопросам (баг-репорт, предложения, пожелания и т.д.) можно обращаться напрямую к разработчику в линке или в ВК (желательно, конечно, в рабочее время).</p>

      <p>Контактные данные:<br>
        * Линк - Матвеев Ярослав Сергеевич<br>
        * ВК - https://vk.com/id94948443</p>

      <p>Реализованный функционал:<br>
        * Формирование шаблонов для корректировки платежей;</p>

      <p>Важная информация:<br>
        * Данный интерфейс пока не прошёл согласование с руководством, поэтому использовать можно сугубо на свой страх и риск;<br>
        * Ознакомиться с исходным кодом (а также скопировать его и запилить что-то своё на основе) можно в репозитории на моём GitHub https://github.com/MoDoStRoY/OBO-Tools и https://github.com/MoDoStRoY/obotoolsweb</p>

      <p>#Version 0.1.1</p>

      <p>Добавлено:<br>
        + Чат;</p>

      <p>Баги:<br>
        - Переход с главного меню в интерфейс корректировок сломан по непонятной причине. URL обновляется, но не страница;<br>
        - Сломан CSS страницы чата;</p>
    </section>

  </div>
</template>

<script>
import hatBar from "../Components/hatBar.vue";

document.title = "OBO Tools"

export default
{
  name: "workspace",
  components: {hatBar},
  methods: {
    openPaymentCorrection: function ()
    {
      //window.location.href = 'http://94.181.44.86:25566/paymentCorrection';
      this.$router.push("/paymentCorrection")
    },
    openChat: function () { window.location.href = 'http://94.181.44.86:25566/chat'; }
  }
}

</script>

<style scoped>

#mainBlock
{
  width: 100%;
  height: 100%;
}

#leftBlock
{
  float: left;
  width: 20%;
}

#centerBlock
{
  float: right;
  width: 80%;
  height: 80%;
}

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

button
{
  width: 90%;
}

</style>