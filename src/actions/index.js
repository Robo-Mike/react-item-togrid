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

const editProduct = productId =>({
  type:types.EDIT_PRODUCT,
  productId: productId
})


export const onProductTypeChange = (event) => {
  console.log('product type changed to')
  console.log(event.target.value)
  dispatch => (changeProductType(event.target.value))
}

export const onProductEdit = (productId) => {
  console.log('product id ' +  productId + 'clicked')
  dispatch => (editProduct(productId))
}

export const onProductSave= (productId) => {
  console.log('product id ' +  productId + ' Saved')
 return true;
}

export const onProductDescriptionChanged = (event)=> {
  console.log('product description changed to')
  console.log(event.target.value)
  return true;
}

export const onProductCostChanged = (event)=> {
  console.log('product cost changed to')
  console.log(event.target.value)
  return true;
}
