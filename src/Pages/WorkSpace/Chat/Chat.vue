<template>
  <div id="mainBlock">
    <hatBar></hatBar>
    <div id="leftBlock">
      <button v-on:click="goBack()">Назад</button>
    </div>

    <div id="centerBlock">
      <textarea v-model="messagesBlock" id="messagesBlock"></textarea>
      <textarea v-model="message" id="message"></textarea>
      <button v-on:click="sendMessage()" id="sendMessage">Отправить сообщение</button>
    </div>

  </div>
</template>

<script>
import hatBar from "@/Pages/Components/hatBar";
import {checkUpdates, sendMessage} from "@/Scripts/Chat/Chat";

document.title = "OBO Tools"

export default {
  name: "chat",
  components: {hatBar},
  data: function () {
    return {
      messagesBlock: "",
      message: "",
    }
  },
  methods: {
    goBack: function ()
    {
      window.location.href = "http://94.181.44.86:25566/workSpace"
    },
    sendMessage: function ()
    {
      sendMessage(this)
    },
    setUpdateTimer: function (timeoutSeconds)
    {
      setTimeout(() => {
        this.updateByTimeout(timeoutSeconds);
      }, timeoutSeconds * 1000, timeoutSeconds);
    },
    updateByTimeout: function (timeoutSeconds)
    {
      new Promise((resolve) => {
        resolve(true);
      }).finally(() => {
        setTimeout(() => {
          this.updateByTimeout(timeoutSeconds);
        }, timeoutSeconds * 1000, timeoutSeconds);});
      console.log("хуйжопа")
      checkUpdates(this)
    },
  },
  mounted()
  {
    this.setUpdateTimer(1)
  }
}
</script>

<style>

#mainBlock
{
  width: 100%;
  height: 100vh;
}

</style>

<style scoped>

#leftBlock
{
  float: left;
  width: 20%;
  height: 100%;
}

#centerBlock
{
  float: right;
  width: 80%;
  height: 80%;
}

textarea
{
  width: 90%;
}

#messagesBlock
{
  height: 70%;
}

#message
{
  height: 20%;
}

#sendMessage
{
  height: 10%;
}

button
{
  width: 90%;
}

</style>