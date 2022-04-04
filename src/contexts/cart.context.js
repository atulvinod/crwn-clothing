import { createContext, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemsToCart: () => {},
  removeItemsFromCart: () => {},
  deleteItemFromCart: () => {},
});

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const CART_ACTION_TYPES = {
  SET_CART_DROPDOWN_OPEN: "SET_CART_DROPDOWN_OPEN",
  ADD_CART_ITEM: "ADD_CART_ITEM",
  REMOVE_CART_ITEM: "REMOVE_CART_ITEM",
  DELETE_CART_PRODUCT: "DELETE_CART_PRODUCT",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_DROPDOWN_OPEN: {
      const { isCartOpen } = state;
      const newIsCartOpen = !isCartOpen;
      return {
        ...state,
        isCartOpen : newIsCartOpen,
      };
    }

    case CART_ACTION_TYPES.ADD_CART_ITEM: {
      const { cartItems } = state;
      const newCartItems = addCartItem(cartItems, payload);
      return {
        ...state,
        cartItems: newCartItems,
      };
    }

    case CART_ACTION_TYPES.REMOVE_CART_ITEM: {
      const { cartItems } = state;
      const newCartItems = removeCartItem(cartItems, payload);
      return {
        ...state,
        cartItems: newCartItems,
      };
    }

    case CART_ACTION_TYPES.DELETE_CART_PRODUCT: {
      const { cartItems } = state;
      const newCartItems = deleteCartItem(cartItems, payload);
      return {
        ...state,
        cartItems: newCartItems,
      };
    }

    default:
      throw new Error(`unhandled type ${action} in cartReducer`);
  }
};

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((e, i, a) => e.id === productToAdd.id);
  if (existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  const existingItem = cartItems.find((e, i, a) => e.id === productToRemove.id);
  if (existingItem.quantity === 1) {
    return cartItems.filter((e, i, a) => existingItem.id !== e.id);
  }
  return cartItems.map((cartItem) => {
    return cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const deleteCartItem = (cartItems, itemToBeDeleted) => {
  return cartItems.filter((e) => e.id !== itemToBeDeleted.id);
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems } = state;
  const addItemsToCart = (productToAdd) => {
    dispatch({ type: CART_ACTION_TYPES.ADD_CART_ITEM, payload: productToAdd });
  };

  const removeItemsFromCart = (productToRemove) => {
    dispatch({
      type: CART_ACTION_TYPES.REMOVE_CART_ITEM,
      payload: productToRemove,
    });
  };

  const deleteItemFromCart = (itemToBeDeleted) => {
    dispatch({
      type: CART_ACTION_TYPES.DELETE_CART_PRODUCT,
      payload: itemToBeDeleted,
    });
  };

  const setIsCartOpen = (state) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_DROPDOWN_OPEN,
      payload: state,
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemsToCart,
    removeItemsFromCart,
    deleteItemFromCart,
    cartItems,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
