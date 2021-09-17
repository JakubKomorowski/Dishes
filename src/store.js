// import reducer from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

const allReducers = combineReducers({
  form: reduxFormReducer,
});

const store = createStore(allReducers, composeWithDevTools());

export default store;
