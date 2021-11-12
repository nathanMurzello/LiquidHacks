import { combineReducers } from "redux";
import slideshows from "./slideshows";
import errors from "./errors";
import auth from "./auth";
import rooms from "./rooms";

export default combineReducers({
    slideshows,
    errors,
    auth,
    rooms
});