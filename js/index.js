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
