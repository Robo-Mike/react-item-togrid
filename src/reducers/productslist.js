import { combineReducers } from 'redux'
import {RECEIVE_PRODUCTS, EDIT_PRODUCT } from '../constants/ActionTypes'

/*reducers signature always (state, action) action object will contain incoming params these manage the application state when
enlisted into redux store*/


const products = (state={}, action)=>{
  switch(action.type)
  {
    case RECEIVE_PRODUCTS:
        return {...state,
          products: action.products.reduce( (accum, current) =>
          {
            // build up an array of products with product id as index
            accum[current.id] = current
            return accum
          },{})}
    default:
        return state
  }

}
const selectedId = (state=0, action ) =>{
  switch (action.type)
  {
    case EDIT_PRODUCT:
      return action.selectedId
  }
}
export default combineReducers({
  products,
  selectedId
})


/*these is business logic  to assist with mapping of props from rationalised state*/
export const getProductById = (state, id) => {
    return state.products[id]
}
