import React, { Component } from 'react'; 
import './Product.css'; 
 
const products = [{ 
    name: 'lettuce', 
    price: 1.00 
}, 
{ 
    name: ' aubergine ', 
    price: 2.5, 
}, 
{ 
    name: 'tomato', 
    price: 1.99 
}, 
{ 
    name: 'cucumber', 
    price: 0.80 
} 
]; 
 
export default class Product extends Component { 
    state = { 
        cart: [], 
      } 
     
      add = (product) => { 
        this.setState(state => ({ 
          cart: [...state.cart, product], 
        })) 
      } 
     
      currencyOptions = { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2, 
      } 
     
      getTotal = () => { 
        const total = this.state.cart.reduce((totalCost, item) => totalCost + item.price, 0
); 
        return total.toLocaleString(undefined, this.currencyOptions) 
      } 
     
      remove = (product) => { 
        this.setState(state => { 
          const cart = [...state.cart]; 
          const productIndex = cart.findIndex(p => p.name === product.name); 
          if(productIndex < 0) { 
            return; 
          } 
          cart.splice(productIndex, 1) 
          return ({ 
            cart 
          }) 
        }) 
      } 
  render() { 
    return( 
      <div className="wrapper"> 
          <div> 
          {products.map(product => ( 
            <div key={product.name}> 

       <div className="product"> <span>{product.name}</span></div> 
       <button onClick={() => this.add(product)}>Add</button> 
       <button onClick={() => this.remove(product)}>Remove</button> 
       </div> 
          ))} 
        </div> 
       
        <div>Number of items: {this.state.cart.length}</div> 
        <div>Total {this.getTotal()}</div> 
      </div> 
    ) 
  } 
}