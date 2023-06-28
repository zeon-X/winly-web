import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import campaignReducer from "./campaign.reducer";
import cartReducer from "./cart.reducer";
import productReducer from "./product.reducer";
import ticketReducer from "./ticket.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  ticket: ticketReducer,
  campaign: campaignReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
