import React from 'react'
import PropTypes from 'prop-types'
import ProductEdit from '../components/ProductEdit'
import ProductList from '../components/ProductList'
import ProductListItem from '../components/ProductListItem'



const ProductContainer = ( {products,productTypes, initialProduct,onProductTypeChange, onProductEdit, onProductSave}) => (
  <div>
  <ProductEdit productTypes={productTypes} product = {initialProduct}  onProductTypeChange = {onProductTypeChange} onProductSave= {onProductSave} />
  <ProductList>
    {products.map(
      (product)=>
      <ProductListItem product={product} onProductEditClicked={onProductEdit} key={product.id} />
    )
  }
  </ProductList>
</div>
)
export default ProductContainer
