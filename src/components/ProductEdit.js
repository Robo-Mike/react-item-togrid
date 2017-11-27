import React from 'react'
import PropTypes from 'prop-types'
//Form controls are just extensions of input type (though select is a bit different)
import { Form , FormGroup, Button ,Col,FormControl, ControlLabel} from 'react-bootstrap';

const ProductEdit = ({product, onProductTypeChange, onProductCostChange, onProductDescriptionChange, productTypes, onProductSave}) => (
  <Form horizontal>
    <FormGroup >
      <Col sm={6} componentClass={ControlLabel} >Description</Col>
      <Col sm={3}><FormControl type='text'  value={product.description} onChange={(e) => onProductDescriptionChange(e)} /></Col>
    </FormGroup>
    <FormGroup>
      <Col sm={6} componentClass={ControlLabel} >Cost</Col>
      <Col sm={3}><FormControl type='text'   value={product.cost} onChange={(e) => onProductCostChange(e)} /></Col>
    </FormGroup>
   <FormGroup>
     <Col sm={6} componentClass={ControlLabel} >Item Type</Col>
     <Col sm={3}>
       <FormControl componentClass='select'   value={product.productTypeId} onChange={(e) => onProductTypeChange(e)} >
        {
           // each array element must include a key element for performance
           productTypes.map( (type) => (
             <option key={type.value} value={type.value} readOnly >{type.name}</option>
           ))
         }
       </FormControl>
    </Col>
   </FormGroup>
   <Button bsStyle= 'primary' onClick={()=>{onProductSave(product.id)}} >Save</Button>
  </Form>
)
// prop types provides error logging where props of incorrect type are supplied
ProductEdit.propTypes = {
  product:PropTypes.shape({
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    productTypeId:  PropTypes.number.isRequired,
    id:  PropTypes.number.isRequired
  }).isRequired,
  onProductTypeChange: PropTypes.func.isRequired,
  onProductSave: PropTypes.func.isRequired,
  ProductTypes:PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }))
}

export default ProductEdit
