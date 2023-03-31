import { productService } from "../services/productService.js";

const url = new URL(window.location);
const idUrl = url.searchParams.get("id");

const getInfo = async () => {
  const image = document.querySelector("[data-image]");
  const category = document.querySelector("[data-category]");
  const name = document.querySelector("[data-productName]");
  const price = document.querySelector("[data-productPrice]");

  const product = await productService.detailProduct(idUrl);

  image.value = product.image;
  category.value = product.categoria;
  name.value = product.nombre;
  price.value = product.precio;
};

getInfo();

const updForm = document.querySelector("[data-submitUpdate]");

updForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const image = document.querySelector("[data-image]").value;
  const category = document.querySelector("[data-category]").value;
  const name = document.querySelector("[data-productName]").value;
  const price = document.querySelector("[data-productPrice]").value;

  productService.updateProduct(image, category, name, price, idUrl).then(() => {
    window.location.href = "/screens/products.html";
  });
});
