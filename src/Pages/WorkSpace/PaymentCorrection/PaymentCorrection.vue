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
        <li><input type="checkbox" id="CRM">CRM
        <li><input type="checkbox" id="WD">WD</li>
      </ul>

      <ul>
        <li><input type="checkbox" id="incorrectTicket">Решение на первой линии
        <li><input type="checkbox" id="refusedCorrection">В корректировке отказано</li>
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
          <li><input id="TTNumber">
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

        <button v-on:click="getRequest">Сформировать шаблоны</button>
      </div>

      <div id="centerBlockResults">
        <p id="decisionTitle">Решение:</p>
        <textarea id="decisionText"></textarea>
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
import {sendRequest} from "../../../Scripts/PaymentCorrection/PaymentCorrection.ts";

document.title = "OBO Tools"

export default {
  name: "PaymentCorrection",
  components: {hatBar},
  methods: {
    goBack: function goBack()
    {
      window.location.href = "http://94.181.44.86:25566/workSpace"
    },
    getRequest: async function getRequest()
    {
      await sendRequest(document);
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