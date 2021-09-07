<template>
  <div id="mainBlock">
    <hatBar></hatBar>
    <div id="leftBlock">
      <button v-on:click="goBack()">Назад</button>
      <br>

      <button disabled>Сбросить кроме даты</button>
      <button disabled>Сбросить всё</button>

      <ul>
        <li><p>Источник заявки:</p>
        <li><input type="checkbox" v-on:change="chosenSource(CRM)" v-model="CRMCB" id="CRM">CRM
        <li><input type="checkbox" v-on:change="chosenSource(WD)" v-model="WDCB" id="WD">WD</li>
      </ul>

      <ul>
        <li><input type="checkbox" id="incorrectTicket">Решение на первой линии
        <li><input type="checkbox" id="refusedCorrection">В корректировке отказано</li>
      </ul>

      <p>Импорт данных:</p>
      <textarea v-model="dataBuffer" id="dataBuffer"></textarea>
      <button disabled v-on:click="loadDataBuffer()">Загрузка из буфера обмена</button>

      <button disabled id="history">История</button>

    </div>

    <div id="centerBlock">
      <div id="centerBlockHeader">
        <ul id="mainInfo" key = key>
          <li><p>Основная информация по ТТ:</p><br>
          <li><p>Номер ТТ</p>
          <li><input v-model="TTNumber" id="TTNumber">
          <li><p>Контактный номер:</p>
          <li><input v-model="contact" id="contact">
          <li><p>Способ ОС:</p>
          <li><input type="checkbox" v-on:change="changeBC(SMS)"  v-model="SMSCB" id="SMS">SMS
          <li><input type="checkbox" v-on:change="changeBC(Call)" v-model="CallCB" id="Call">Звонок
          <li><input type="checkbox" v-on:change="changeBC(email)" v-model="emailCB" id="e-mail">e-mail
          <li><input type="checkbox" v-on:change="changeBC(smm)" v-model="smmCB" id="smm">Соц.сеть
          <li><input type="checkbox" v-on:change="changeBC(XXX)" v-model="XXXCB" id="XXX">XXX</li>
        </ul>

        <ul id="paymentInfo">
          <li><p>Информация по платежу:</p><br>
          <li><p>Ошибочный номер телефона:</p>
          <li><input v-model="incorrectNumber" id="incorrectNumber">
          <li><p>Корректный номер телефона:</p>
          <li><input v-model="correctNumber" id="correctNumber">
          <li><p>Сумма платежа:</p>
          <li><input v-model="paymentSum" id="paymentSum">
          <li><p>Дата платежа:</p>
          <li><input v-model="paymentDate" id="paymentDate"></li>
        </ul>

        <ul id="correctionParams">
          <li><p>Параметры корректировки:</p><br>
          <li><input type="checkbox" id="fullCorrectionCB">Корректировка в полном объёме
          <li><input type="checkbox" id="reparationCB">Или предоставляется компенсация?
          <li><br><p>Сумма корректировки (если частичная):</p>
          <li><input v-model="correctionSum" id="correctionSum"></li>
        </ul>

        <button v-on:click="getRequest()">Сформировать шаблоны</button>
      </div>

      <div id="centerBlockResults">
        <p id="decisionTitle">Решение:</p>
        <textarea id="decisionText"></textarea>
        <button v-on:click="highlightText(decisionMark)" id="decisionCopyBtn">Выделить</button>
        <p id="kassaCommentTitle">Комментарий для кассы:</p>
        <textarea id="kassaCommentText"></textarea>
        <button v-on:click="highlightText(kassaCommentMark)" id="kassCommentCopyBtn">Выделить</button>
        <p id="reparationCommentTitle">Комментарий для компенсации в CRM:</p>
        <textarea id="reparationCommentText"></textarea>
        <button v-on:click="highlightText(reparationCommentMark)" id="reparationCommentCopyBtn">Выделить</button>
        <button disabled id="copyAllBtn">Скопировать всё</button>
      </div>
    </div>
  </div>
</template>

<script>
import hatBar from "@/Pages/Components/hatBar";
import {sendRequest} from "@/Scripts/PaymentCorrection/PaymentCorrection.ts";
import {changeBC, changeSource, highlightText} from "@/Scripts/PaymentCorrection/FrontLogic.ts";

document.title = "OBO Tools"

export default {
  name: "PaymentCorrection",
  components: {hatBar},
  data: function () {
    return {
      SMSCB: false,
      CallCB: false,
      emailCB: false,
      smmCB: false,
      XXXCB: false,

      SMS: "SMS",
      Call: "Call",
      email: "email",
      smm: "smm",
      XXX: "XXX",

      CRMCB: false,
      WDCB: false,
      CRM: "CRM",
      WD: "WD",

      TTNumber: "",
      contact: "",
      incorrectNumber: "",
      correctNumber: "",
      paymentSum: "",
      paymentDate: "",
      correctionSum: "",

      decisionMark: "decision",
      kassaCommentMark: "kassaComment",
      reparationCommentMark: "reparationComment",

      decision: "",
      kassaComment: "",
      reparationComment: "",

      dataBuffer: ""
    };
  },
  methods: {
    goBack: function ()
    {
      window.location.href = "http://94.181.44.86:25566/workSpace"
    },
    getRequest: async function ()
    {
      await sendRequest(this);
    },
    chosenSource: function (currentElement) {changeSource(this, currentElement)},
    changeBC: function (currentElement) {changeBC(this, currentElement)},
    highlightText: function (textMark) {highlightText(this, textMark)},
    loadDataBuffer: function () {  }
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

#dataBuffer
{
  width: 90%;
  height: 20%;
  resize: none;
}

</style>