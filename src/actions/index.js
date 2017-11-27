import * as types from '../constants/ActionTypes'
import  {getProducts} from '../api/service.js'

export const getAllProducts = () =>
  dispatch => {
    getProducts().then(
      products => (dispatch(receiveProducts(products))
    )
    )
  }

const receiveProducts = products =>({
    type:types.RECEIVE_PRODUCTS,
    products: products
  })

const changeProductType = productTypeId =>({
  type:types.EDIT_PRODUCT_TYPE_CHANGED,
  productTypeId: productTypeId
})

const changeProductDescription = productDescription =>({
  type:types.EDIT_PRODUCT_DESCRIPTION_CHANGED,
  productDescription: productDescription
})

const changeProductCost = productCost =>({
  type:types.EDIT_PRODUCT_COST_CHANGED,
  productCost: productCost
})

const editProduct = (productId, product) =>({
  type:types.EDIT_PRODUCT,
  selectedId: productId,
  product:product
})

//ES6 arrow syntax as it is multiline - { after arrow, must explicitly return a value, or could probably use round bracket
export const onProductTypeChange = (event) => {
  console.log('product type changed to')
  console.log(event.target.value)
  // using thunk so we return a function that in turn returns an action creator
  return dispatch => ( dispatch(changeProductType(event.target.value)))
}

export const onProductEdit = (productId) => {
  console.log('product id ' +  productId + 'clicked')
  return (dispatch, getState) => (dispatch(editProduct(productId, getState().productsList.products[productId] )))
}

export const onProductSave= (productId) => {
  console.log('product id ' +  productId + ' Saved')
 return true;
}

export const onProductDescriptionChange = (event)=> {
  console.log('product description changed to')
  console.log(event.target.value)
  return dispatch => ( dispatch(changeProductDescription(event.target.value)))
}

export const onProductCostChange = (event)=> {
  console.log('product cost changed to')
  console.log(event.target.value)
  return dispatch => ( dispatch(changeProductCost(event.target.value)))
}
