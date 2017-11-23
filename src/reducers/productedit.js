import {EDIT_PRODUCT_TYPE_CHANGED ,
  EDIT_PRODUCT_DESCRIPTION_CHANGED ,
  EDIT_PRODUCT_COST_CHANGED,
  EDIT_PRODUCT
} from '../constants/ActionTypes'

/*reducers signature always (state, action) action object will contain incoming params*/
const initialState = {
  cost:0,
  description : 'Select a Product to edit',
  productTypeId: 1,
  id:0
}

const updateEditItem = (state={initialState}, action)=>{
  switch(action.type)
  {
    case EDIT_PRODUCT_TYPE_CHANGED:
        return {...state, productTypeId: action.productTypeId }
    case EDIT_PRODUCT:
        return {...state, state.products[action.productId]}
    default:
        return state
  }

}

export default updateEditItem
