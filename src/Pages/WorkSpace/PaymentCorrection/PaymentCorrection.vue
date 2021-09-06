<template>
  <div id="mainBlock">
    <hatBar></hatBar>
    <div id="leftBlock">
      <button v-on:click="goBack()">Назад</button>
      <br>

      <button>Сбросить кроме даты</button>
      <button>Сбросить всё</button>

      <ul>
        <li><p>Источник заявки:</p>
        <li><input type="checkbox">CRM
        <li><input type="checkbox">WD</li>
      </ul>

      <ul>
        <li><input type="checkbox">Решение на первой линии
        <li><input type="checkbox">В корректировке отказано</li>
      </ul>

      <p>Импорт данных:</p>
      <button>Загрузка из буфера обмена</button>

      <button id="history">История</button>

    </div>

    <div id="centerBlock">
      <div id="centerBlockHeader">
        <ul id="mainInfo">
          <li><p>Основная информация по ТТ:</p><br>
          <li><p>Номер ТТ</p>
          <li><input id="TTnumber">
          <li><p>Контактный номер:</p>
          <li><input id="contact">
          <li><p>Способ ОС:</p>
          <li><input type="checkbox">SMS
          <li><input type="checkbox">Звонок
          <li><input type="checkbox">e-mail
          <li><input type="checkbox">Соц.сеть
          <li><input type="checkbox">XXX</li>
        </ul>

        <ul id="paymentInfo">
          <li><p>Информация по платежу:</p><br>
          <li><p>Ошибочный номер телефона:</p>
          <li><input id="incorrectNumber">
          <li><p>Корректный номер телефона:</p>
          <li><input id="correctNumber">
          <li><p>Сумма платежа:</p>
          <li><input id="paymentSum">
          <li><p>Дата платежа:</p>
          <li><input id="paymentDate"></li>
        </ul>

        <ul id="correctionParams">
          <li><p>Параметры корректировки:</p><br>
          <li><input type="checkbox" id="fullCorrectionCB">Корректировка в полном объёме
          <li><input type="checkbox" id="reparationCB">Или предоставляется компенсация?
          <li><br><p>Сумма корректировки (если частичная):</p>
          <li><input id="correctionSum"></li>
        </ul>

        <button v-on:click="getResults()">Сформировать шаблоны</button>
      </div>

      <div id="centerBlockResults">
        <p id="decisionTitle">Решение:</p>
        <textarea id="decisionText" v-model="decision"></textarea>
        <button id="decisionCopyBtn">Копировать</button>
        <p id="kassaCommentTitle">Комментарий для кассы:</p>
        <textarea id="kassaCommentText"></textarea>
        <button id="kassCommentCopyBtn">Копировать</button>
        <p id="reparationCommentTitle">Комментарий для компенсации в CRM:</p>
        <textarea id="reparationCommentText"></textarea>
        <button id="reparationCommentCopyBtn">Копировать</button>
        <button id="copyAllBtn">Скопировать всё</button>
      </div>
    </div>
  </div>
</template>

<script>
import hatBar from "@/Pages/Components/hatBar";

document.title = "OBO Tools"

export default {
  name: "PaymentCorrection",
  components: {hatBar},
  props:
      {
        decision: String,
        kassaComment: String,
        reparationComment: String
      },
  methods: {
    goBack: function goBack()
    {
      window.location.href = "http://94.181.44.86:25566/workSpace"
    },
    getResults: async function sendMessage()
    {
      let dataList = ["1488", "795111666572", "SMS", "79511166573", "795111666572",
        "500", "27.08.2021", "500", "CRM", "false", "false", "true", "false"];

      let response = await fetch('http://94.181.44.86:25565/api/PaymentCorrection/getResults',
          {
            method: 'POST',
            headers: {'Accept': 'text/pl',
              'Content-Type': 'application/json'},
            body: JSON.stringify({"dataList": dataList})
          });
      let result = JSON.parse(await response.text());

      document.getElementById("decisionText").value = result[0];
      document.getElementById("kassaCommentText").value = result[1];
      document.getElementById("reparationCommentText").value = result[2];
    }
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
  margin-bottom: 2%;
}

#history
{
  width: 90%;
  margin-top: 99%;
}

#centerBlockHeader
{
}

#mainInfo, #paymentInfo, #correctionParams
{
  float: left;
  margin-right: 1%;
  margin-top: 0;
}

#decisionCopyBtn, #kassCommentCopyBtn, #reparationCommentCopyBtn, #copyAllBtn
{
  margin: 0;
}

#decisionTitle, #kassaCommentTitle, #reparationCommentTitle
{
  margin: 0;
}

#decisionText, #kassaCommentText, #reparationCommentText
{
  width: 90%;
  height: 10%;
  resize: none;
}

</style>