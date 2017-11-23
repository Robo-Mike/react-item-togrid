import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button} from 'react-bootstrap';
const ProductListItem = ( {product, onProductEditClicked}) => (
  <Row>
    <Col xs={3} >{product.description}</Col>
    <Col xs={3} >{product.cost}</Col>
    <Col xs={3} >{product.productTypeName}</Col>
    <Col xs={3} ><Button bsStyle= 'primary' onClick={()=>{onProductEditClicked(product.id)}} >Edit</Button></Col>
  </Row>

)
ProductListItem.propTypes = {
  product:PropTypes.shape({
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    productTypeName:  PropTypes.string.isRequired
  }).isRequired,
  onProductEditClicked: PropTypes.func.isRequired

}

export default ProductListItem
