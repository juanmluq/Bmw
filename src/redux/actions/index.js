import axios from 'axios';
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_PRODUCT_DETAIL ='GET_PRODUCT_DETAIL';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const POST_QUERY = "POST_QUERY";


export const getAllProducts = () => {
  return async function (dispatch) {
    return (axios("http://localhost:3001/products")
    .then(response => dispatch({type: GET_ALL_PRODUCTS, payload: response.data})))
  };
};

export const getProductDetail = (id) => {
  return async (dispatch) => {
  return (axios(`http://localhost:3001/products/${id}`)
  .then(response => dispatch ({type: GET_PRODUCT_DETAIL, payload: response.data})))
  };
};


export function postQuery(payload){
  return {
    type: POST_QUERY,
    payload: {
      ...payload
    }
  }
}
