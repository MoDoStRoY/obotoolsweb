export default class Message
{
    dateTime: string
    message: string

    constructor(dateTime: string, message: string)
    {
        this.dateTime = dateTime
        this.message = message
    }
}