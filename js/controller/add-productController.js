import { productService } from "../services/productService.js";

const addProductForm = document.querySelector("[data-submitProduct]");

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
