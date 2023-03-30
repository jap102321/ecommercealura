const productList = () =>
  fetch("http://localhost:3000/products").then((resp) => resp.json());

const updateProduct = (id) => {
  fetch(`http://localhost:3000/products/${id}`);
};

const detailProduct = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((resp) =>
    resp.json()
  );
};

export const productService = {
  productList,
  detailProduct,
};
