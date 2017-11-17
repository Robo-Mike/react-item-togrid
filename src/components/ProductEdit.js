import React from 'react'
import PropTypes from 'prop-types'

const ProductEdit = ({product, onProductTypeChange, productTypes}) => (
<div>
  <div className="form-group">
    <label htmlFor="productDescription">Description ({product.description}) </label>
    <input type='text'   id='productDescription' value={product.description} />
  </div>
  <div className="form-group">
    <label htmlFor="productCost">Cost</label>
    <input type='text'  value={product.cost}  id='productCost'/>
  </div>
  <div className="form-group">
    <label htmlFor="productType">Type</label>
    <select  value={product.type}  id='productType' onChange={(e) => onProductTypeChange(e)}  >
      {
         // each array element must include a key element for performance
         productTypes.map( (type) => (
           <option key={type.value} value={type.value} readOnly >{type.name}</option>
         ))
       }
    </select>
  </div>
</div>
)

{/* ProductEdit.propTypes = {

} */}

export default ProductEdit
