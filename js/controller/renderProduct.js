import { productService } from "../services/productService.js";

const productListDiv = document.querySelector(".product__list_mod");
const getProduct = (image, nombre, precio, id) => {
  const product = document.createElement("div");
  product.classList.add("product");
  const productContent = `
    <div class="updel__icons">
      <a href="../screens/edit_product.html?id=${id}">
        <img src="../assets/icons/pencil-svgrepo-com.svg" alt="upd icon" class="upd_icon">
      </a>
      <img src="../assets/icons/trash-full-svgrepo-com.svg" alt="del icon" class="del_icon" id=${id}>  
    </div>
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

  const delIcon = product.querySelector(".del_icon");

  delIcon.addEventListener("click", () => {
    const id = delIcon.id;
    productService
      .deleteProduct(id)
      .then((resp) => {
        alert(`El producto ${id} fue eliminado exitosamente.`);
      })
      .catch((err) => alert("Error"));
  });

  return product;
};

productService.productList().then((data) => {
  data.forEach(({ image, nombre, precio, id }) => {
    const product = getProduct(image, nombre, precio, id);
    productListDiv.appendChild(product);
  });
});

const delIcon = document.querySelector(".del_icon");
