let elements;

function refreshElements()
{
    elements = [document.getElementById("TTNumber"), document.getElementById("contact"),
        document.getElementById("SMS"), document.getElementById("Call"), document.getElementById("e-mail"),
        document.getElementById("smm"), document.getElementById("XXX"),
        document.getElementById("correctNumber"), document.getElementById("incorrectNumber"),
        document.getElementById("paymentSum"), document.getElementById("paymentDate"),
        document.getElementById("correctionSum"), document.getElementById("CRM"), document.getElementById("WD"),
        document.getElementById("refusedCorrection"), document.getElementById("incorrectTicket"),
        document.getElementById("fullCorrectionCB"), document.getElementById("reparationCB")]
}

export function changeSource(BCVariant)
{
    refreshElements()

    if (BCVariant === "CRM")
        elements[13].checked = false;
    else
        elements[12].checked = false
}

export function changeBC(currentElement)
{
    refreshElements()

    switch (currentElement)
    {
        case "SMS":
            SMS();
            break;
        case "Call":
            Call();
            break;
        case "e-mail":
            email();
            break;
        case "smm":
            smm();
            break;
        case "XXX":
            XXX();
            break;
    }
}

function SMS()
{
    for (let i = 3; i < 7; i++)
    {
        elements[i].checked = false;
    }
}

function Call()
{
    for (let i = 2; i < 7; i++)
    {
        if (i != 3)
            elements[i].checked = false;
    }
}

function email()
{
    for (let i = 2; i < 7; i++)
    {
        if (i != 4)
            elements[i].checked = false;
    }
}

function smm()
{
    for (let i = 2; i < 7; i++)
    {
        if (i != 5)
            elements[i].checked = false;
    }
}

function XXX()
{
    for (let i = 2; i < 7; i++)
    {
        if (i != 6)
            elements[i].checked = false;
    }
}

/*export function getBCVariant(documentIN): any
{
    refreshElements(documentIN)

    elements.forEach(element =>
    {
        if (element.checked === true) return element.name
        else return "ХХХ"
    })
}*/