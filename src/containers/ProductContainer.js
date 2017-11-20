import React from 'react'
import PropTypes from 'prop-types'
import ProductEdit from '../components/ProductEdit'
import ProductList from '../components/ProductList'
import ProductListItem from '../components/ProductListItem'
import {OnProductTypeChange} from '../actions/index.js'
import {OnProductEdit} from '../actions/index.js'


const ProductContainer = ( {products,productTypes, initialProduct,onProductTypeChange, onProductEdit}) => (
  <div>
  <ProductEdit productTypes={productTypes} product = {initialProduct}  onProductTypeChange = {onProductTypeChange} />
  <ProductList>
    {products.map(
      (product)=>
      <ProductListItem product={product} onProductEditClicked={onProductEdit} />
    )
  }
  </ProductList>
</div>
)
export default ProductContainer
