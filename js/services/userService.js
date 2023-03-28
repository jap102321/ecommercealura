const userList = () =>
  fetch("http://localhost:3000/adminAcc").then((data) => data.json());

export const userService = {
  userList,
};
