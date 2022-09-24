import * as types from "./actionTypes";
import axios from "axios"
// const getBookRequest=()=>{

// }

const getBooks=(params)=>dispatch=>{
dispatch({type:types.GET_BOOKS_REQUEST});
return axios.get("https://warm-garden-46246.herokuapp.com/books",params).then((r)=>{
    dispatch({type:types.GET_BOOKS_SUCCESS,payload:r.data});

}).catch((e)=>{
    dispatch({type:types.GET_BOOKS_FAILURE,payload:e})
})
};


const UpdateBook=(id,payload)=>dispatch=>{
    dispatch({type:types.PATCH_BOOK_REQUEST});
    return axios.patch(`https://warm-garden-46246.herokuapp.com/books/${id}`,payload).then((r)=>{
        dispatch({type:types.PATCH_BOOK_SUCCESS, payload:r.data});
}).catch((e)=>{
    dispatch({type:types.PATCH_BOOK_FAILURE,payload:e});
})
}

export {getBooks,UpdateBook}