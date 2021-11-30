import {combineReducers, createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"; // this is a middleware for calling api's using redux
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductsReducer, getProductDetailsReducer } from "./reducers/productReducer";
import  {cartReducer}  from "./reducers/cartReducer";

// below function is used when u have manuy reducers and you want to combine them as one..........
const reducer= combineReducers({
    getProducts:getProductsReducer,
    getProductDetails:getProductDetailsReducer,
    cart:cartReducer,
})

const middleware=[thunk];  // this is the syntax thats it

// below function takes two arguments , first is reducers
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;