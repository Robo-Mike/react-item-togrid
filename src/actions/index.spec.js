import {getAllProducts} from './index'
import  {getProducts} from '../api/service.js'
import {Thunk} from 'redux-testkit'
import * as types from '../constants/ActionTypes'
jest.mock('../api/service.js');

describe('Action tests', () => {

  beforeEach(() => {
    jest.resetAllMocks();
  })

  it('Should do something' ,async ()=> {
    //getProducts now mocked by Jest
     getProducts.mockReturnValueOnce( new Promise(
         (res, rej)=> { res(
                 [
                   {"id":1,  "description": "Omelette" , "cost": 8.55, "productTypeId" : 2 },
                   {"id":2,  "description": "Minnestrone" , "cost": 4.55, "productTypeId" : 1 }
                 ]
         )}
       ));
    const dispatches = await Thunk(getAllProducts).execute()
    expect(dispatches.length).toBe(1)
    expect(dispatches[0].getAction()).toEqual({ type:types.RECEIVE_PRODUCTS, products:  [
       {"id":1,  "description": "Omelette" , "cost": 8.55, "productTypeId" : 2 },
       {"id":2,  "description": "Minnestrone" , "cost": 4.55, "productTypeId" : 1 }
     ]})
  })
})


//
// it('makes a call after request',  (done)=>{
//       var dispatch = jest.fn()
//       //var getProducts = jest.fn()
//       var recieveProducts = done
//       getAllProducts()(dispatch, recieveProducts)
//       console.log ('finished')
//       expect(dispatch.mock.calls.length).toBe(0);
// })
