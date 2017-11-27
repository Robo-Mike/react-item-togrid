import React from 'react'
import PropTypes from 'prop-types'
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

const mapStateToProps = state => ({
  products: getVisibleProducts(state),
  selectedProduct:getEditProduct(state),
  productTypes:ProductTypes
})


export default connect(
  mapStateToProps,
  {onProductTypeChangeX:onProductTypeChange, onProductEditX:onProductEdit, onProductSaveX:onProductSave, onProductCostChangeX:onProductCostChange, onProductDescriptionChangeX:onProductDescriptionChange}
)(ProductContainer)
