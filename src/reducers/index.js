import { combineReducers } from 'redux'
import updateEditItem from './productedit'
import productsList, {getProductById ,getSelectedId, getProductListFromState}  from './productslist'

export default combineReducers({
  updateEditItem,
  productsList
})

export const getEditProduct = (state) => (getProductById(state.productsList,getSelectedId(state.productsList)))
export const getVisibleProducts = (state) => (getProductListFromState(state.productsList))
