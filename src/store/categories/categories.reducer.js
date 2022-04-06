import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  payload = {}
) => {
  const { type, action } = payload;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        categoriesMap: action,
      };

    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action,
      };
    default:
      return state;
  }
};
