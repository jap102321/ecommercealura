import { validate, validateTextArea } from "./validateForms.js";

const logInRef = document.querySelector("[data-loginBtn]");
const seeAllRef = document.querySelector("[data-seeAll]");
const refs = () => {
  logInRef.addEventListener("click", () => {
    window.location.href = "/screens/login.html";
  });
  seeAllRef.addEventListener("click", () => {
    window.location.href = "/screens/product_list.html";
  });
};

refs();

const data_form = document.querySelector(".contact__form");
const inputs = data_form.querySelectorAll("input");
const textArea = document.querySelector("textarea");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    validate(input.target);
  });
});

textArea.addEventListener("blur", (tarea) => validateTextArea(tarea.target));
