import { messageBox } from "../utils/message.js";
import { validateContactForm } from "../utils/validation.js";

export function contactForm() {
  let name = getFormFieldsData("name");
  let email = getFormFieldsData("email");
  let subject = getFormFieldsData("subject");
  let message = getFormFieldsData("message");

  if (validateContactForm(name, email, subject, message)) {
    messageBox("contactMsg", "block", "green", "Form submitted successfully");
  }
}
function getFormFieldsData(fieldId) {
  return document.getElementById(fieldId).value;
}
