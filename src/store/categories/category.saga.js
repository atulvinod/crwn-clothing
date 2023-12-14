import { takeLatest, all, call, put } from "redux-saga/effects";

import { getShopCategories } from "../../services";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "./categories.action";

import { CATEGORIES_ACTION_TYPES } from "./categories.types";

export function* fetchCategoriesAsync() {
  try {
    // when we wait for some function to execute a value, the function has to be a generator effect
    // hence to convert the function to a generator effect we use the call(fn, args) method.
    const shopCategories = yield call(getShopCategories);
    
    // now we have to dispatch the result and it is done via the put method
    yield put(fetchCategoriesSuccess(shopCategories));
  } catch (e) {
    yield put(fetchCategoriesFailed(e));
  }
}

export function* onFetchCategories() {
  //this function indicates that we want to get the latest value from this generator function,
  //irrespective of how many times this function was called
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

// The aggregator function (main saga) for all the generator functions related to this saga
export function* categoriesSaga() {
    // All is a type of Promise.all in which the further execution waits for the completion of all the generator functions passed as arguments
  // console.log('categories saga')
    yield all([call(onFetchCategories)])
}
