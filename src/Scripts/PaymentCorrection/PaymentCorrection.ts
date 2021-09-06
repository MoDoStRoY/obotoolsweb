export async function sendRequest(document)
{
    let bodyOfRequest = [document.getElementById("TTNumber").value, document.getElementById("contact").value, "SMS",
        document.getElementById("correctNumber").value, document.getElementById("incorrectNumber").value,
        document.getElementById("paymentSum").value, document.getElementById("paymentDate").value,
        document.getElementById("correctionSum").value, "CRM", document.getElementById("refusedCorrection").checked.toString(),
        document.getElementById("incorrectTicket").checked.toString(), document.getElementById("fullCorrectionCB").checked.toString(),
        document.getElementById("reparationCB").checked.toString()]

    let response = await fetch('http://94.181.44.86:25565/api/PaymentCorrection/getResults',
        {
            method: 'POST',
            headers: {'Accept': 'text/pl',
                'Content-Type': 'application/json'},
            body: JSON.stringify({"dataList": bodyOfRequest})
        });
    let result = JSON.parse(await response.text());

    document.getElementById("decisionText").value = result[0];
    document.getElementById("kassaCommentText").value = result[1];
    document.getElementById("reparationCommentText").value = result[2];
}