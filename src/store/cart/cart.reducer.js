import { CART_ACTION_TYPES } from "./cart.types";
import { createContext, useReducer } from "react";

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

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

export const cartReducer = (state = CART_INITIAL_STATE, payload = {}) => {
  const { type, action } = payload;
  const { cartItems } = state;
  switch (type) {
    case CART_ACTION_TYPES.ADD_ITEM_TO_CART: {
      return {
        ...state,
        cartItems: addCartItem(cartItems, action),
      };
    }

    case CART_ACTION_TYPES.REMOVE_ITEMS_FROM_CART:
      return {
        ...state,
        cartItems: removeCartItem(cartItems, action),
      };
    case CART_ACTION_TYPES.DELETE_PRODUCT_FROM_CART:
      return {
        ...state,
        cartItems: deleteCartItem(cartItems, action),
      };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action,
      };

    default:
      return state;
  }

};
