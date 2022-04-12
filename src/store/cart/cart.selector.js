export const isCartOpenSelector = (state) => state.cart.isCartOpen;

export const cartItemsSelector = (state) => state.cart.cartItems;

export const selectCartTotal = (state) =>{
    return state.cart.cartItems.reduce((acc, items) => {
        return acc + items.quantity * items.price;
      }, 0);
}