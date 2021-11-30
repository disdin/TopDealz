import axios from "axios";
import * as action from "../constants/productConstant"

const url="http://localhost:8000";

export const getProducts=()=>async (dispatch)=>{
    try{
        const {data} =await axios.get(`/products`);
        dispatch({type:action.GET_PRODUCT_SUCCESS,payload:data}) //this function receives two arguments first is type second is payload .... and it will always call a reducer
        // in above function we passed a object right , that object is said to be called a action passed into the dispatch function to call a reducer
    }catch(err){
        dispatch({type:action.GET_PRODUCT_FAIL,payload:err.response})
    }
}

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
        const {data} =await axios.get(`/product/${id}`);
        dispatch({type:action.GET_PRODUCT_DETAIL_SUCCESS,payload:data})
    }catch(err){
        dispatch({type:action.GET_PRODUCT_DETAIL_FAIL,payload:err.response})
    }
}