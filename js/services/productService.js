const productList = () =>
  fetch("http://localhost:3000/products").then((resp) => resp.json());

const addProduct = (image, categoria, nombre, precio) => {
  return fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: uuid.v4(), image, categoria, nombre, precio }),
  });
};
const detailProduct = (id) => {
  return fetch(`http://localhost:3000/products/${id}`).then((resp) =>
    resp.json()
  );
};

const updateProduct = (image, categoria, nombre, precio, id) => {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ image, categoria, nombre, precio }),
  })
    .then((resp) => resp)
    .catch((err) => console.log(err));
};

export const productService = {
  productList,
  addProduct,
  detailProduct,
  updateProduct,
};
