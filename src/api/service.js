import Products from './products.json'
import ProductTypes from '../constants/ProductTypes'
const TIMEOUT = 100

//was returning an object need to convert to a straight array
export const getProducts = ()=> {
  return new Promise((resolve, reject)=>{
      setTimeout(()=>(resolve(
        Object.keys(Products).map(function(key, index) {
           return { ...Products[key], productTypeName: ProductTypes.filter(type => type.value == Products[key].productTypeId)[0].name }
        })
      )),TIMEOUT)
  })
}
