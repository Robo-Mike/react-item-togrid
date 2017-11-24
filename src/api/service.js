import Products from './products.json'
const TIMEOUT = 100
export const getProducts = ()=> {
  return new Promise((resolve, reject)=>{
      setTimeout(()=>(resolve(
        Object.keys(Products).map(function(key, index) {
           return Products[key]
        })
      )),TIMEOUT)
  })
}
