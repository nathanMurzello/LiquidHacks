import axios from 'axios';

import { GET_SLIDESHOWS, DELETE_SLIDESHOW } from './types';


//GET SLIDESHOWS
export const getSlideshows= () => dispatch =>{
    axios
        .get("/api/Slideshows/")
        .then(res => {
            dispatch({
                type: GET_SLIDESHOWS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//DELTE SLIDESHOW
export const deleteSlideshow= (id) => dispatch =>{
    axios
        .delete(`/api/Slideshows/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_SLIDESHOW,
                payload: id
            });
        }).catch(err => console.log(err));
};