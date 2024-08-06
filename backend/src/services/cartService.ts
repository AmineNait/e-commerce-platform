let cart = [
  { id: 1, name: "Product 1", price: 100, quantity: 2 },
  { id: 2, name: "Product 2", price: 200, quantity: 1 },
];

export const getCart = () => {
  return cart;
};

export const addItemToCart = (item: any) => {
  cart.push(item);
  return item;
};

export const removeItemFromCart = (id: number) => {
  cart = cart.filter((item) => item.id !== id);
  return id;
};

export const clearCart = () => {
  cart = [];
};
