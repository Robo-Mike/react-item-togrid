import React from 'react'
import { shallow , mount } from 'enzyme'
import ProductEdit from './ProductEdit'


const testProps = {product:{description:'Jam Tart', cost:1.99, productTypeId:1,id:99 }, productTypes:[{name:'desert',value:1}], onProductTypeChange: function(){}, onProductSave: function(){} }

const setup = props => {
  var component = mount( <ProductEdit {...props} /> )
  return component
}

describe('productedit', () => { it('shows product description', ()=> {

  const component = setup(testProps);
  //didnt have any luck with enzyme selects being more selective!!
  expect(component.html()).toContain(testProps.product.description)
})

})
