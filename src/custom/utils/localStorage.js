import { LOGIN_CREDENTIALS_KEY } from "./../settings/api";

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getfromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

// SET User Credentials to Local Storage
export function setLoginCredentialsToLocalStorage(value) {
  return saveToLocalStorage(LOGIN_CREDENTIALS_KEY, value);
}
// get User Credetials From Local Storage
export function getLoginCredentialsFromLocalStorage() {
  return getfromLocalStorage(LOGIN_CREDENTIALS_KEY);
}
