import * as types from "./actionTypes"
import axios from "axios";

export const login=(payload)=>dispatch=>{
    dispatch({type:types.USER_LOGIN_REQUEST});
    return axios.post("https://reqres.in/api/login",payload)
    .then((r)=>{
       return dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data.token})
    }).catch((e)=>{
        dispatch({type:types.USER_LOGIN_FAILURE,payload:e})
    })
};


export const loginAdmin=(payload)=>dispatch=>{
  
    dispatch({type:types.USER_LOGIN_REQUEST});
    return axios.post("https://reqres.in/api/login",payload)
    .then((r)=>{
       return dispatch({type:types.USER_LOGIN_SUCCESS,payload:r.data.token,admin:true})
    }).catch((e)=>{
        dispatch({type:types.USER_LOGIN_FAILURE,payload:e})
    })
};

export const LogOut=(payload)=>dispatch=>{
    dispatch({type:types.USER_LOGIN_FAILURE});
    return dispatch({type:types.USER_LOGIN_FAILURE})
}