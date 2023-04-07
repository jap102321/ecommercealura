import { productService } from "./services/productService.js";

export const searchBarApplication = () => {
  // Selecting and creating basic needs for the searchBar
  const searchBar = document.querySelector("[data-searchBar]");
  const CardTemplate = document.querySelector("[data-searchTemplate]");
  const dataSearch_div = document.querySelector("[data-searchBar__div]");
  let productList = [];

  // Creating dynamic HTML for the search products info

  // Checking the content of the search to print the products
  searchBar.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();
    productList.forEach((product) => {
      const isValid = product.name.toLowerCase().includes(val);
      if (isValid && !val == "") {
        product.element.classList.remove("isHide");
      } else if (val == "") {
        product.element.classList.add("isHide");
      }
    });
  });

  productService.productList().then((data) => {
    productList = data.map((prod) => {
      const card = CardTemplate.content.cloneNode(true).children[0];
      const image = card.querySelector("[data-searchImg]");
      const body = card.querySelector("[data-searchBody]");
      image.src = prod.image;
      body.innerHTML = `
      <p>${prod.nombre}</p>
      <p>${prod.precio}</p>
      `;
      card.classList.add("isHide");
      dataSearch_div.append(card);

      return {
        imagen: prod.image,
        name: prod.nombre,
        price: prod.precio,
        element: card,
      };
    });
  });
};
