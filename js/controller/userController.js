import { userService } from "../services/userService.js";
export const isLogged = false;
const userInput = document.querySelector("[data-log='username']");
const passInput = document.querySelector("[data-log='password']");

const dataChecker = (input, db_info) => {
  if (input != db_info) {
    input.parentElement.classList.add("form__input--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      "El campo está incorrecto, revisa los datos!";
  } else {
    input.parentElement.classList.remove("form__input--invalid");
    userInput.value = "";
    passInput.value = "";
  }
};

const button = document.querySelector(".log__check");
button.addEventListener("submit", (e) => {
  e.preventDefault();
  userService.userList().then((data) => {
    data.forEach(({ user, password }) => {
      // if (userInput.value == user) {
      //   dataChecker(userInput, user);
      // }
      // if (passInput.value == password) {
      //   dataChecker(passInput, password);
      // }

      if (userInput.value == user && passInput.value == password) {
        window.location.href = "/screens/products.html";
      } else if (userInput.value != user) {
        dataChecker(userInput, user);
      } else if (passInput.value != user) {
        dataChecker(passInput, password);
      }
    });
  });
});
