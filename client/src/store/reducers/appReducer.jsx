import { combineReducers } from "redux";

import image from "./image_reducer";

const appReducer = combineReducers({
  image,
});

export default appReducer;
