import { productService } from "../services/productService.js";
const getController = () => {};
const getNewProduct = (nombre, precio, image) => {
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
            <p class="seeProduct__link">Ver producto</p>
        </div>
   
    `;
  product.innerHTML = productContent;
  const btnHref = document.querySelector(".seeProduct__link");
  return product;
};

const divStarWars = document.querySelector("[data-starwars]");
const divConsolas = document.querySelector("[data-consoleList]");
const divVariedad = document.querySelector("[data-diversos]");

productService
  .productList()
  .then((data) => {
    data.forEach(({ nombre, precio, categoria, image }) => {
      if (categoria == "starwars") {
        const newProduct = getNewProduct(nombre, precio, image);
        divStarWars.appendChild(newProduct);
      } else if (categoria == "consolas") {
        const newProduct = getNewProduct(nombre, precio, image);
        divConsolas.appendChild(newProduct);
      } else if (categoria == "variedad") {
        const newProduct = getNewProduct(nombre, precio, image);
        divVariedad.appendChild(newProduct);
      }
    });
  })
  .catch((err) => console.log(err));
