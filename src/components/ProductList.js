import React from 'react'
import {Grid,Row,Col} from 'react-bootstrap';
const ProductList = ({children}) => (
  <Grid>
    <Row><Col>Menu</Col></Row>
      {children}
  </Grid>
)
export default ProductList
