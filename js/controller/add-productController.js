import { productService } from "../services/productService.js";

const addProductForm = document.querySelector("[data-submitProduct]");
const image = document.querySelector("[data-imagePost]");
let click_counter = 0;
image.value = "http://127.0.0.1:5500/assets/product/";
image.addEventListener("click", () => {
  click_counter += 1;

  if (click_counter == 1) {
    const selectPage = document.querySelector("body");
    const divModal = document.createElement("div");
    divModal.classList.add("modal");

    const contentModal = `
    <div class="inner__modal">
     <div class="modal__img>
      <img src="../assets/icons/close-md-svgrepo-com.svg" alt=""> 
     </div>
     <p class="text__modal">Consultar el nombre de la imagen y 
      su subcarpeta para añadirlo, en caso de no saber consultar con el departamento de IT</p>
    </div>
  `;
    divModal.innerHTML = contentModal;

    divModal.addEventListener("click", () => {
      selectPage.removeChild(divModal);
    });
    selectPage.appendChild(divModal);
  }
});

addProductForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const image = document.querySelector("[data-imagePost]").value;
  const category = document.querySelector("[data-categoryPost]").value;
  const name = document.querySelector("[data-productNamePost]").value;
  const price = document.querySelector("[data-productPricePost]").value;
  const description = document.querySelector("[data-description]").value;

  productService
    .addProduct(image, category, name, price, description)
    .then((resp) => {
      window.location.href = "/screens/products.html";
    })
    .catch((err) => console.log(err));
});
