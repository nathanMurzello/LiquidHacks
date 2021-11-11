import axios from 'axios';
import { returnErrors } from './messages';
import { GET_SLIDESHOWS, DELETE_SLIDESHOW, ADD_SLIDESHOW} from './types';


//GET SLIDESHOWS
export const getSlideshows= () => (dispatch,getState) =>{
    //get token from state
    const token=getState().auth.token;
    //headers 
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    };
    //If token add to headers config
    if(token){
        config.headers['Authorization'] =`Token ${token}`;
    }

    axios
        .get("/api/Slideshows/", config)
        .then(res => {
            dispatch({
                type: GET_SLIDESHOWS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
};

//DELTE SLIDESHOW
export const deleteSlideshow= (id) => (dispatch,getState) =>{
    //get token from state
    const token=getState().auth.token;
    //headers 
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }
    //If token add to headers config
    if(token){
        config.headers['Authorization'] =`Token ${token}`;
    }
    axios
        .delete(`/api/Slideshows/${id}/`, config)
        .then(res => {
            dispatch({
                type: DELETE_SLIDESHOW,
                payload: id
            });
        }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
};


//ADD SLIDESHOW
export const addSlideshow= (slideshow) => (dispatch,getState) =>{
    //get token from state
    const token=getState().auth.token;
    console.log(token);
    //headers 
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    };
    //If token add to headers config
    if(token){
        config.headers['Authorization'] =`Token ${token}`;
    }
    axios
        .post("/api/Slideshows/", slideshow, config)
        .then(res => {
            dispatch({
                type: ADD_SLIDESHOW,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data,err.response.status)));
};

