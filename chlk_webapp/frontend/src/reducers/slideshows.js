import { GET_SLIDESHOWS, DELETE_SLIDESHOW, ADD_SLIDESHOW, GET_SLIDESHOW } from "../actions/types.js";

const initialState={
    slideshows: []
}

export default function(state= initialState, action) {
    switch (action.type){
        case GET_SLIDESHOW:
        case GET_SLIDESHOWS:
            return {
                ...state,
                slideshows: action.payload
            };
        case DELETE_SLIDESHOW:
            return {
                ...state,
                slideshows: state.slideshows.filter(slideshow=>slideshow.id !== action.payload)
            };
        case ADD_SLIDESHOW:
            return {
                ...state,
                slideshows: [...state.slideshows, action.payload]
            };
        default:
            return state;
    }
}