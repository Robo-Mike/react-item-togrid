import Products from './products.json'
const TIMEOUT = 100
export const getProducts = ()=> {
  return new Promise((resolve, reject)=>{
      setTimeout(()=>(resolve()),TIMEOUT)
  })
}
