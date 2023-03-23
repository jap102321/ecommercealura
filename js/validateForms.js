export const validate = (input) => {
  const inputType = input.dataset.type;

  if (input.validity.valid) {
    input.parentElement.classList.remove("form__input--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("form__input--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      showErrorMsg(inputType, input);
  }
};

export const validateTextArea = (tarea) => {
  const tareaType = tarea.dataset.type;

  if (tarea.validity.valid) {
    tarea.parentElement.classList.remove("form__input--invalid");
    tarea.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    tarea.parentElement.classList.add("form__input--invalid");
    tarea.parentElement.querySelector(".input-message-error").innerHTML =
      showErrorMsg(tareaType, tarea);
  }
};

const errorTypes = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const errorMessage = {
  name: {
    valueMissing: "El campo nombre no puede estar vacío.",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío.",
    typeMismatch: "El correo es invalido",
  },
  password: {
    valueMissing: "El campo de contraseña no puede estar vacío",
    patternMismatch:
      "El campo debe tener, mínimo 6 caracteres, máximo 12 debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales",
  },
  textarea: {
    valueMissing: "El campo de mensaje no puede estar vacío",
  },
};

const showErrorMsg = (inputType, input) => {
  let message = "";
  errorTypes.forEach((err) => {
    if (input.validity[err]) {
      message = errorMessage[inputType][err];
    }
  });
  return message;
};
