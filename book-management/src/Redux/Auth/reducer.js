import * as types from "./actionTypes";


const initialState={
    token:"",
    isAuth:false,
    isAuthLoading:false,
    isAuthError:false,
    isAdmin:false,
}


export const reducer=(oldState=initialState,action)=>{
const {type,payload,admin}=action;
switch(type){
    case types.USER_LOGIN_REQUEST:{
        return{
            ...oldState,isAuthLoading:true
        }
    }
    case types.USER_LOGIN_SUCCESS:{
        return{
            ...oldState,isAuthLoading:false,isAuth:true, token:payload,isAdmin:admin||false
        }
    }

    case types.USER_LOGIN_FAILURE:{
        return{
            ...oldState,isAuthError:true,isAuth:false, isAuthLoading:false,token:"",isAdmin:false
        }
    }
    default:
        return oldState;
}
}