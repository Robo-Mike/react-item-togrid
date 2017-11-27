import { combineReducers } from 'redux'
import {RECEIVE_PRODUCTS, EDIT_PRODUCT } from '../constants/ActionTypes'
import {initialState as initialProduct} from './productedit'
/*reducers signature always (state, action) action object will contain incoming params these manage the application state when
enlisted into redux store*/

const products = (state={}, action)=>{
  switch(action.type)
  {
    case RECEIVE_PRODUCTS:
        return action.products.reduce( (accum, current) =>
          {
            // build up an array of products with product id as index, so can be retrieved by id
            accum[current.id] = current
            return accum
          }, {})
    default:
        return state
  }

}
const selectedId = (state= 1, action ) => {
  switch (action.type)
  {
    case EDIT_PRODUCT:
      return action.selectedId
    default:
      return state
  }
}
export default combineReducers({
  products,
  selectedId
})


export const getProductListFromState = (state) => {

    return Object.keys(state.products).map((key, index) => {return state.products[key] } )

}


/*ABANDONED AFTER Rejiigging state was here for business logic  to assist with mapping of props from rationalised state are normalised through the state tree
IMPORTANT has to return a valid objecteven when not found otherwise props are treated as uncontrolled*/
export const getProductById = (state, id) => {
    if (Object.keys(state.products).length > 0){
        return state.products[id]
    }
    return {initialProduct}
}

export const getSelectedId = (state) => {
  return state.selectedId
}
