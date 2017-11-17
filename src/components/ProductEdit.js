import React from 'react'
import PropTypes from 'prop-types'
//Form controls are just extensions of input type (though select is a bit different)
import { Form , FormGroup, Button ,Col,FormControl, ControlLabel} from 'react-bootstrap';

const ProductEdit = ({product, onProductTypeChange, productTypes}) => (

  <Form horizontal>
    <FormGroup >
      <Col sm={6} componentClass={ControlLabel} >Description</Col>
      <Col sm={3}><FormControl type='text'  value={product.description} /></Col>
    </FormGroup>
    <FormGroup>
      <Col sm={6} componentClass={ControlLabel} >Cost</Col>
      <Col sm={3}><FormControl type='text'   value={product.cost} /></Col>
    </FormGroup>
   <FormGroup>
     <Col sm={6} componentClass={ControlLabel} >Item Type</Col>
     <Col sm={3}>
       <FormControl componentClass='select'   defaultValue={product.type} onChange={(e) => onProductTypeChange(e)} >
        {
           // each array element must include a key element for performance
           productTypes.map( (type) => (
             <option key={type.value} value={type.value} readOnly >{type.name}</option>
           ))
         }
       </FormControl>
    </Col>
   </FormGroup>
  </Form>
)

{/* ProductEdit.propTypes = {

} */}

export default ProductEdit
