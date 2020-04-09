import React from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductEdit from '../components/ProductEdit'
import ProductList from '../components/ProductList'
import ProductListItem from '../components/ProductListItem'
import {onProductTypeChange} from '../actions/index.js'
import {onProductEdit} from '../actions/index.js'
import {onProductSave} from '../actions/index.js'
import {onProductDescriptionChange} from '../actions/index.js'
import {onProductCostChange} from '../actions/index.js'
import ProductTypes from '../constants/ProductTypes'
import {getEditProduct, getVisibleProducts} from '../reducers/index'

// appended handler names to make it clear they are coming from the mapping function rather than import
const ProductContainer = ( {products,productTypes, selectedProduct,onProductTypeChangeX,onProductCostChangeX,onProductDescriptionChangeX, onProductEditX, onProductSaveX} ) => (
  <div>
  <ProductEdit productTypes={productTypes} product = {selectedProduct}  onProductTypeChange = {onProductTypeChangeX}   onProductDescriptionChange = {onProductDescriptionChangeX}  onProductCostChange = {onProductCostChangeX} onProductSave= {onProductSaveX} />
  <ProductList>
    {products.map(
      (product)=>
      <ProductListItem product={product} onProductEditClicked={onProductEditX} key={product.id} />
    )
  }
  </ProductList>
</div>
)

//Redux means props dont need to be passed down from parent component (e.g. from ProductList to ProductListItem)
//filter redux store state using functions included in reducers to provide standard props for react components, then pass to connect
const mapStateToProps = state => ({
  products: getVisibleProducts(state),
  selectedProduct:getEditProduct(state),
  productTypes:ProductTypes
})

//store connect is called twice in a row  1st call takes state mapping and action creator functions, 2nd call is object to apply to
//Note reducers used by the store have already been been assigned during createstore
export default connect(
  mapStateToProps,
  {onProductTypeChangeX:onProductTypeChange, onProductEditX:onProductEdit, onProductSaveX:onProductSave, onProductCostChangeX:onProductCostChange, onProductDescriptionChangeX:onProductDescriptionChange}
)(ProductContainer)
