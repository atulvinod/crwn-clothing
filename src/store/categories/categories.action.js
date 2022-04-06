import { getShopCategories } from "../../services";
import { createAction } from "../../utils";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesMap) =>
  createAction(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCEEDED,
    categoriesMap
  );

export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

/*We will create a thunk action which will get a dispatch function and this handles,
  all the async logic of our action and will further fire an action which will be handled
  by our main reducers 
*/
export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());

  try {
    const shopCategories = await getShopCategories();
    dispatch(fetchCategoriesSuccess(shopCategories));
  } catch (e) {
    dispatch(fetchCategoriesFailed(e));
  }
};
