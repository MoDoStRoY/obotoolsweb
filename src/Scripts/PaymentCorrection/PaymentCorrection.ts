let document;

//import {getBCVariant} from "./FrontLogic";

export async function sendRequest(documentIN)
{
    let bodyOfRequest = [documentIN.getElementById("TTNumber").value, documentIN.getElementById("contact").value, "SMS",
        documentIN.getElementById("correctNumber").value, documentIN.getElementById("incorrectNumber").value,
        documentIN.getElementById("paymentSum").value, documentIN.getElementById("paymentDate").value,
        documentIN.getElementById("correctionSum").value, "CRM", documentIN.getElementById("refusedCorrection").checked.toString(),
        documentIN.getElementById("incorrectTicket").checked.toString(), documentIN.getElementById("fullCorrectionCB").checked.toString(),
        documentIN.getElementById("reparationCB").checked.toString()]

    let response = await fetch('http://94.181.44.86:25565/api/PaymentCorrection/getResults',
        {
            method: 'POST',
            headers: {'Accept': 'text/pl',
                'Content-Type': 'application/json'},
            body: JSON.stringify({"dataList": bodyOfRequest})
        });

    document = documentIN;

    getResult(JSON.parse(await response.text()))
}

function getResult(result)
{
    document.getElementById("decisionText").value = result[0];
    document.getElementById("kassaCommentText").value = result[1];
    document.getElementById("reparationCommentText").value = result[2];
}