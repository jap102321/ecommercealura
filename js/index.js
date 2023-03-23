import { validate, validateTextArea } from "./validateForms.js";

const logInRef = document.querySelector("[data-loginBtn]");
const consolesRef = document.querySelector("[data-consoles]");

const refs = () => {
  logInRef.addEventListener("click", () => {
    window.location.href = "/screens/login.html";
  });
  consolesRef.addEventListener("click", () => {
    window.location.href = "/screens/consolas.html";
  });
};

refs();

const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});

textArea.addEventListener("blur", (tarea) => validateTextArea(tarea.target));
