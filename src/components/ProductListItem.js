import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button} from 'react-bootstrap';
const ProductListItem = ( {product, onProductEditClicked}) => (
  <Row>
    <Col>{product.description}</Col>
    <Col>{product.cost}</Col>
    <Col>{product.typename}</Col>
    <Col><Button bsStyle= 'primary' onClick={onProductEditClicked(product.id)} >Edit</Button></Col>
  </Row>

)
ProductListItem.propTypes = {
  product:PropTypes.shape({
    cost: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    typename:  PropTypes.string.isRequired
  }).isRequired,
  onProductEditClicked: PropTypes.func.isRequired

}

export default ProductListItem
