export function messageDialogue(element, messageType,messageColor, msg)
{
    document.querySelector(`${element}`).innerHTML = `
    <span style="display:${messageType};color:${messageColor};">${msg}</span>`
}