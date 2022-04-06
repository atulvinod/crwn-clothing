import { createAction } from "../../utils";
import { CART_ACTION_TYPES } from "./cart.types";

export const addItemsToCart = (cartItem) =>
  createAction(CART_ACTION_TYPES.ADD_ITEM_TO_CART, cartItem);

export const removeItemsFromCart = (cartItem) =>
  createAction(CART_ACTION_TYPES.REMOVE_ITEMS_FROM_CART, cartItem);

export const deleteItemFromCart = (cartItem) =>
  createAction(CART_ACTION_TYPES.DELETE_PRODUCT_FROM_CART, cartItem);

export const setCartIsOpen = (state) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, state);
