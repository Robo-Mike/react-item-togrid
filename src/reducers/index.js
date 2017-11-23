import { combineReducers } from 'redux'
import updateEditItem from './productedit'
import productsList  from './productslist'

export default combineReducers({
  updateEditItem,
  productsList
})

export const getEditProductById = (state,id) => (getProductById(state.productsList,id))
