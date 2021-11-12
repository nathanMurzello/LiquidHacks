import axios from 'axios';
import { returnErrors } from './messages';
import { GET_ROOM, ADD_ROOM } from './types';

//GET ROOM
export const getRoom= (code) => (dispatch,getState) =>{
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
        .get(`/api/Rooms/`, config)
        .then(res => {
            console.log(res.data)
            const targetRoom=res.data.filter(function (room) {
                return room.code==code
            })[0];
            console.log("---------")
            console.log(targetRoom)
            dispatch({
                type: GET_ROOM,
                payload: targetRoom
            });
        }).catch(err => console.log(err) );//dispatch(returnErrors(err.response.data,err.response.status)));
};

//ADD ROOM
export const addRoom= (slideshow) => (dispatch,getState) =>{
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
    const body={
        "slideshow" : slideshow
    }
    axios
        .post("api/create-room", body,config)
        .then((response) => {
            console.log(response);
            dispatch({
                type: ADD_ROOM,
                payload: response.data
            });
        }).catch(err => console.log(err) );//dispatch(returnErrors(err.response.data,err.response.status)));
};