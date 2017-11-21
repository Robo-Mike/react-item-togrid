export const OnProductTypeChange = (event) => {
  console.log('product type changed')
  console.log(event.target.value)
  return true;
}

export const OnProductEdit = (productId) => {
  console.log('product id ' +  productId + 'clicked')
 return true;
}

export const OnProductSave= (productId) => {
  console.log('product id ' +  productId + ' Saved')
 return true;
}
