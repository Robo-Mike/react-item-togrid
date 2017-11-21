import React from 'react'
import {Grid,Row,Col} from 'react-bootstrap';
const ProductList = ({children}) => (
  <Grid>
    <Row><Col><h3>Menu</h3></Col></Row>
      {children}
  </Grid>
)
export default ProductList
