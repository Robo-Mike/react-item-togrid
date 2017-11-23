import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ProductEdit from '../components/ProductEdit'
import ProductList from '../components/ProductList'
import ProductListItem from '../components/ProductListItem'
import {onProductTypeChange} from '../actions/index.js'
import {onProductEdit} from '../actions/index.js'
import {onProductSave} from '../actions/index.js'
import ProductTypes from '../constants/ProductTypes'
import getEditProductById from '../reducers/index'

const ProductContainer = ( {products,productTypes, initialProduct,onProductTypeChange, onProductEdit, onProductSave}) => (
  <div>
  <ProductEdit productTypes={productTypes} product = {selectedProject}  onProductTypeChange = {onProductTypeChangeX} onProductSave= {onProductSaveX} />
  <ProductList>
    {products.map(
      (product)=>
      <ProductListItem product={product} onProductEditClicked={onProductEdit} key={product.id} />
    )
  }
  </ProductList>
</div>
)

const mapStateToProps = state => ({
  products: state.productsList.products,
  selectedProduct:getEditProductById(),
  productTypes:ProductTypes
})


export default connect(
  mapStateToProps,
  {onProductTypeChangeX:onProductTypeChange, onProductEditX:onProductEdit, onProductSaveX:onProductSave}
)(ProductContainer)
