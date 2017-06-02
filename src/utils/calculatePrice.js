export default (cartItem) => {
  if (!cartItem.discount) {
    return cartItem.quantity * cartItem.price;
  }

  if (cartItem.discount.type === 'percDiscount') {
    return cartItem.quantity * cartItem.price * (1 - (cartItem.discount.amount / 100));
  }

  if (cartItem.discount.type === 'multipleFree') {
    const freeItems = Math.floor(cartItem.quantity / cartItem.discount.every);
    const computableQuantity = cartItem.quantity - freeItems;
    return cartItem.price * computableQuantity;
  }
}
