import {getBCVariant, getSource} from "./FrontLogic";

export async function sendRequest(vue)
{
    let bodyOfRequest = [ vue.TTNumber, vue.contact, getBCVariant(vue), vue.correctNumber, vue.incorrectNumber,
        vue.paymentSum, vue.paymentDate, vue.correctionSum, getSource(vue), vue.refusedCorrectionCB.toString(),
        vue.incorrectTicketCB.toString(), vue.fullCorrectionCB.toString(), vue.reparationCB.toString()]

    let response = await fetch('http://94.181.44.86:25565/api/PaymentCorrection/getResults',
        {
            method: 'POST',
            headers: {'Accept': 'text/pl',
                'Content-Type': 'application/json'},
            body: JSON.stringify({"dataList": bodyOfRequest})
        });

    //document = documentIN;

    getResult(JSON.parse(await response.text()), vue)
}

function getResult(result, vue)
{
    vue.decision = result[0];
    vue.kassaComment = result[1];
    vue.reparationComment = result[2];
}