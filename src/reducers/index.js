import authReducer from "./auth.reducer";
import { combineReducers } from "redux";
import userReducer from './user.reducer';
import categoryReducer from './category.reducer';
import orderReducer from './order.reducer';
import productReducer from './product.reducer';


const rootReducer = combineReducers({
    auth:authReducer,
    user : userReducer,
    category : categoryReducer,
    order : orderReducer,
    product:productReducer
});
export default rootReducer;