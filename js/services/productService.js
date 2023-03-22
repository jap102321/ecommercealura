const productList = () => {
  fetch("http://localhost:3000/products").then((resp) => resp.json());
};

export const productService = {
  productList,
};
