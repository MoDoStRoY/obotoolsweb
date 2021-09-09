/*function refreshElements()
{
    elements = [document.getElementById("TTNumber"), document.getElementById("contact"),
        document.getElementById("SMS"), document.getElementById("Call"), document.getElementById("e-mail"),
        document.getElementById("smm"), document.getElementById("XXX"),
        document.getElementById("correctNumber"), document.getElementById("incorrectNumber"),
        document.getElementById("paymentSum"), document.getElementById("paymentDate"),
        document.getElementById("correctionSum"), document.getElementById("CRM"), document.getElementById("WD"),
        document.getElementById("refusedCorrection"), document.getElementById("incorrectTicket"),
        document.getElementById("fullCorrectionCB"), document.getElementById("reparationCB")]
}*/

export function changeSource(vue, currentElement)
{
    if (currentElement === "CRM")
        vue.WDCB = false;
    else
        vue.CRMCB = false
}

export function changeBC(vue, currentElement)
{
    disableBCCB(vue)

    switch (currentElement)
    {
        case "SMS":
            vue.SMSCB = true;
            break;
        case "Call":
            vue.CallCB = true
            break;
        case "email":
            vue.emailCB = true
            break;
        case "smm":
            vue.smmCB = true
            break;
        case "XXX":
            vue.XXXCB = true
            break;
    }
}

function disableBCCB(vue)
{
    vue.SMSCB = false
    vue.CallCB = false
    vue.emailCB = false
    vue.smmCB = false
    vue.XXXCB = false
}

export function getBCVariant(vue)
{
    if (vue.SMSCB)
        return "SMS";
    else if (vue.CallCB)
        return "Звонок";
    else if (vue.emailCB)
        return "e-mail";
    else if (vue.smmCB)
        return "e-mail";
    else if (vue.XXXCB)
        return "XXX";
}

export function getSource(vue)
{
    if (vue.CRMCB)
        return "CRM";
    else return "WD";
}

export function highlightText(vue, textMark)
{
    switch (textMark)
    {
        case "decision":
            document.getElementById("decisionText").select()
            break;
        case "kassaComment":
            document.getElementById("kassaCommentText").select()
            break;
        case "reparationComment":
            document.getElementById("reparationCommentText").select()
            break;
    }
}

export function loadDataBuffer(vue)
{
    let buffer = vue.dataBuffer.split("\n")

    vue.TTNumber = buffer[0]
    vue.contact = buffer[1]
    vue.incorrectNumber = buffer[2]
    vue.correctNumber = buffer[3]
    vue.paymentSum = buffer[4]
    vue.paymentDate = buffer[5]
    vue.correctionSum = buffer[6]
}

export function clearDataWithoutDate(vue)
{
    vue.TTNumber = ""
    vue.contact = ""
    vue.incorrectNumber = ""
    vue.correctNumber = ""
    vue.paymentSum = ""
    vue.correctionSum = ""

    vue.SMSCB = false
    vue.CallCB = false
    vue.emailCB = false
    vue.smmCB = false
    vue.XXXCB = false

    vue.CRMCB = false
    vue.WDCB = false

    vue.fullCorrectionCB = false
    vue.reparationCB = false

    vue.incorrectTicketCB = false
    vue.refusedCorrectionCB = false

    vue.dataBuffer = ""

    vue.decision = ""
    vue.kassaComment = ""
    vue.reparationComment = ""
}

export function clearBuffer(vue)
{
    vue.dataBuffer = ""
}

export function clearAll(vue)
{
    clearDataWithoutDate(vue)
    vue.paymentDate = ""
}