import { productService } from "../services/productService.js";
const productListDiv = document.querySelector(".product__list_mod");
const getProduct = (image, nombre, precio, id) => {
  const product = document.createElement("div");
  product.classList.add("product");
  const productContent = `
    <div class="product__img">
        <img src="${image}" alt="">
    </div>
    <div class="product__title">
        <p class="productTitle">${nombre}</p>
    </div>
    <div class="product__price">
        <p class="price"><b>$${precio}</b></p>
    </div>
    <div class="seeProduct">
        <p style="color:blue">id: ${id}</p>
    </div>
    `;
  product.innerHTML = productContent;
  return product;
};

productService.productList().then((data) => {
  data.forEach(({ image, nombre, precio, id }) => {
    const product = getProduct(image, nombre, precio, id);
    productListDiv.appendChild(product);
  });
});
