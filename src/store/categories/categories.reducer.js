import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE,payload = {}) => {
  const { type, action } = payload;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORES_MAP:
      return {
        ...state,
        categoriesMap: action,
      };
    default:
      return state;
  }
};
