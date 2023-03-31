const productList = () =>
  fetch("http://localhost:3000/products").then((resp) => resp.json());

const detailProduct = (id) => {
  return fetch(`http://localhost:3000/products/${id}`).then((resp) =>
    resp.json()
  );
};

const updateProduct = (image, nombre, categoria, precio, id) => {
  fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image, nombre, categoria, precio }),
  })
    .then((resp) => resp)
    .catch((err) => console.log(err));
};

export const productService = {
  productList,
  detailProduct,
  updateProduct,
};
