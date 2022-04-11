import { all, call } from "redux-saga/effects";
import { categoriesSaga } from "./categories/category.saga";

//generator function is required for sagas
/**
 * Generator function is a type of async await in which we wait for values after execution and yeild/return values
 * and we call .next on the generator to get an object from the generator which contains
 * {value, done}.
 * value = the value yeilded from the generator
 * done = indicates if the generator can yeild more values
 * eg :function* rootSaga(){
 *  yeild 5;
 * }
 *
 * //To execute the generator
 * rootSaga.next() 
 * 
 * if the last value from the generator is returned instead of yeild , the done will be true and it will contain value
 * instead of undefined (the generator will return value as undefined if the last value was yeilded)
 */
export function* rootSaga() {
    yield all([call(categoriesSaga)])
}
