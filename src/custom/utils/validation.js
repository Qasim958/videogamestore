import { messageDialogue } from "./message.js";

export const validateCredentials = (email, password) => {
  if (!validateEmail(email, 0)) {
    messageDialogue(".emailMsg", "block", "red", "Enter valid email address");

    return false;
  } else {
    messageDialogue(".emailMsg", "none", "green", " ");
  }
  if (!validatePassword(password, 0, 16)) {
    messageDialogue(".passwordMsg", "block", "red", "Password is required");

    return false;
  } else {
    messageDialogue(".passwordMsg", "none", "green", " ");
  }
  return true;
};

export function validateEmail(data, charLng) {
  const validateEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return data.trim().length > charLng &&
    validateEmail.test(String(data).toLowerCase())
    ? true
    : false;
}

export function validatePassword(data, charMinLng, charMAxLng) {
  return data.length > charMinLng && data.length < charMAxLng ? true : false;
}

// export const validateContactForm = (name, email, subject, message) => {
//   if (!validateValueLng(name, 2)) {
//     messageDialogue("nameMsg", "block", "red", "Enter valid name");
//     return false;
//   } else {
//     messageDialogue("nameMsg", "none", "green", " ");
//   }

//   if (!validateEmail(email, 0)) {
//     messageDialogue("emailMsg", "block", "red", "Enter valid email address");

//     return false;
//   } else {
//     messageDialogue("emailMsg", "none", "red", " ");
//   }

//   if (!validateValueLng(subject, 2)) {
//     messageDialogue("subjectMsg", "block", "red", "Enter valid Subject");

//     return false;
//   } else {
//     messageDialogue("subjectMsg", "none", "green", " ");
//   }

//   if (!validateValueLng(message, 25)) {
//     messageDialogue(
//       "messageMsg",
//       "block",
//       "red",
//       "Messgae should be atleast 25 charcherts long"
//     );

//     return false;
//   } else {
//     messageDialogue("messageMsg", "none", "green", " ");
//   }
//   return true;
// };

// function validateValueLng(data, charLng) {
//   return data.trim().length >= charLng ? true : false;
// }
