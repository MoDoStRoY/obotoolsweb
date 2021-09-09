import {getCurrentTimeDate} from "../TimeDate";

export async function sendMessage(vue)
{
    let response = await fetch('http://94.181.44.86:25565/api/Chat/sendMessage',
        {
            method: 'POST',
            headers: {'Accept': 'text/pl',
                'Content-Type': 'application/json'},
            body: JSON.stringify({"dateTime": getCurrentTimeDate(),"message": vue.message})
        });

    refreshMessagesBlock(JSON.parse(await response.text()), vue)
}

function refreshMessagesBlock(response, vue)
{
    vue.messagesBlock = ""

    for (let i = 0; i < response.length; i++)
    {
        vue.messagesBlock += response[i].dateTime + "\n" + response[i].message
        if (i != response.length-1)
            vue.messagesBlock += "\n\n"
    }

}

export async function checkUpdates(vue)
{
    let response = await fetch('http://94.181.44.86:25565/api/PaymentCorrection/getResults',
        {
            method: 'POST',
            headers: {'Accept': 'text/pl',
                'Content-Type': 'application/json'},
            body: JSON.stringify({"key": "ForTheEmperor"})
        });

    checkCompare(JSON.parse(await response.text()), vue)
}

function checkCompare()
{

}