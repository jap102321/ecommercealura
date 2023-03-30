import { userService } from "../services/userService.js";
export const isLogged = false;
const userInput = document.querySelector("[data-type='username']");
const passInput = document.querySelector("[data-type='password']");

const dataChecker = (input, db_data) => {
  if (input.value != db_data) {
    input.parentElement.classList.add("form__input--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      "El campo está incorrecto, revisa los datos!";
  } else {
    input.parentElement.classList.remove("form__input--invalid");
    userInput.value = "";
    passInput.value = "";
    window.location.href = "/screens/products.html";
  }
};

const button = document.querySelector(".submit__log");
button.addEventListener("click", (e) => {
  e.preventDefault();
  userService.userList().then((data) => {
    data.forEach(({ user, password }) => {
      dataChecker(userInput, user);
      dataChecker(passInput, password);
    });
  });
});
