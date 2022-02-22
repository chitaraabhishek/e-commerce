import { getProductsreducer } from "./Productsreducer";
import { combineReducers } from "redux";

const rootreducers = combineReducers({
  products: getProductsreducer ?? [],
});

export default rootreducers;
