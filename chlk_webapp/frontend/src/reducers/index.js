import { combineReducers } from "redux";
import slideshows from "./slideshows";
import errors from "./errors";
import auth from "./auth";

export default combineReducers({
    slideshows,
    errors,
    auth
});