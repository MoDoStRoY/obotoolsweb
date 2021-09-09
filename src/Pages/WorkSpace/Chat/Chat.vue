<template>
  <div id="mainBlock">
    <hatBar></hatBar>
    <div id="leftBlock">
      <button v-on:click="goBack()">Назад</button>
    </div>

    <div id="centerBlock">
      <textarea v-model="messagesBlock" id="messagesBlock"></textarea>
      <textarea v-model="message" id="message"></textarea>
      <button v-on:click="sendMessage()" id="sendMessage"></button>
    </div>

  </div>
</template>

<script>
import hatBar from "@/Pages/Components/hatBar";
import {sendMessage} from "@/Scripts/Chat/Chat";

document.title = "OBO Tools"

export default {
  name: "chat",
  components: {hatBar},
  data: function () {
    return {
      messagesBlock: "",
      message: ""
    };
  },
  methods: {
    goBack: function ()
    {
      window.location.href = "http://94.181.44.86:25566/workSpace"
    },
    sendMessage: function ()
    {
      document.body.offsetHeight = 100%
      sendMessage(this)
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

#sendMessage
{
  height: 20%;
}

button
{
  width: 90%;
}

</style>