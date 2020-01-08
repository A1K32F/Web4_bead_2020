import React from 'react';
import './App.css';
import ShoppingCart from './ShoppingCart'
import ProductForm from "./ProductForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <table>
              <tr>
                  <td>
                      <ProductForm/>
                      <br/>
                  </td>
                  <td>
                      <ShoppingCart/>
                  </td>
              </tr>
          </table>
      </header>
    </div>
  );
}
export default App;
