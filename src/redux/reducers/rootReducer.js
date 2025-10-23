import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import orderReducer from "./orderReducer";
import wishlistReducer from "./wishlistReducer";
import shopReducers from "./shopReducers";
import compareReducer from "./compareReducer";

const rootReducer = combineReducers({
  cartReducer,
  wishlistReducer,
  compareReducer,
  shopReducers,
  orderReducer,
});

export default rootReducer;
