import axios from 'axios';
import {returnErrors} from './messages';

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';


//CHECK TOKEN AND LOAD USER
export const loadUser =() => (dispatch, getState) => {
    //User Loading
    dispatch({type: USER_LOADING});
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

    axios.get('/api/auth/user', config).then(res =>{
        dispatch({
            type: USER_LOADED,
            payload:res.data
        });
    }).catch(err=> {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({type: AUTH_ERROR});
    });
};


//LOGIN USER 
export const login =(username, password) => (dispatch) => {
    //headers 
    const config={
        headers:{
            'Content-Type': 'application/json'
        }
    }

    //Request Body
    const body=JSON.stringify({ username, password});

    axios.post('/api/auth/login',body, config).then(res =>{
        dispatch({
            type: LOGIN_SUCCESS,
            payload:res.data
        });
    }).catch(err=> {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({type: LOGIN_FAIL});
    });
};


// REGISTER USER
export const register = ({ username, password, first_name }) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
  
    // Request Body
    const body = JSON.stringify({ username, password, first_name });
  
    axios
      .post('/api/auth/register', body, config)
      .then((res) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: REGISTER_FAIL,
        });
      });
  };
  

//LOGOUT USER 
export const logout=() => (dispatch, getState) => {
    
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

    axios.post('/api/auth/user/logout/', null, config).then(res =>{
        dispatch({
            type: LOGOUT_SUCCESS
        });
    }).catch(err=> {
        dispatch(returnErrors(err.response.data, err.response.status));
    });
};

