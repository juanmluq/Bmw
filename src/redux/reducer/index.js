import {GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL, POST_QUERY} from "../actions"; 

const initialState = {
  products: [],
  productDetail: {},
  querys:[]
};

const rootReducer = (state = initialState, action) => {
  switch (
    action.type
  ) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload
      }
      case GET_PRODUCT_DETAIL:
        return{
          ...state,
          productDetail: action.payload
        }
          case POST_QUERY:
            return {
              ...state,
              querys: state.querys.concat(action.payload)
            }
       
            default: return state
  }
};

export default rootReducer;
