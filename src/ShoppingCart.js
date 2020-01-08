import React from 'react';
import ProductStore from "./ProductStore";
import ShoppingCartActions from "./ShoppingCartActions";
import logo from "./logo.svg";
import Alert from "./Alert";
import './App.css';

class ShoppingCart extends React.Component{

    constructor(props){
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {products : [{fn :'',ln:'',email:'',edu:'',kno:''}]}
    }

    _onChange(){
        this.setState({products : ProductStore._products});
    }

    componentDidMount(){
        ProductStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        ProductStore.removeChangeListener(this._onChange)
    }

    render(){
        console.log(this.props.products);

        return (
            <table>
                <tbody>
                    <div>
                       {this.state.products.map((product)=>{
                           if(product.fn.length<1)
                           {return (<div>
                           </div>)}
                           else {
                               return (<div class="container">
                                           <div className="form-group">
                                               <tr>
                                                   <td>
                                                       <img src={logo} className="App-logo" alt="logo"/>
                                                   </td>
                                                   <td>
                                                       <h2>Candidate</h2>
                                                   </td>
                                               </tr>
                                           </div>
                                           <div className="form-group">
                                               <label className="control-label col-sm-2">Name: </label>
                                               <div className="col-sm-10">
                                                   <input
                                                       value={product.fn+" "+product.ln}
                                                       type='text'
                                                       className="form-control"
                                                   />
                                               </div>
                                           </div>
                                           <div className="form-group">
                                               <label className="control-label col-sm-2">Email: </label>
                                               <div className="col-sm-10">
                                                   <input
                                                       value={product.email}
                                                       type='text'
                                                       className="form-control"
                                                   />
                                               </div>
                                           </div>
                                           <div className="form-group">
                                               <label className="control-label col-sm-2">Education:</label>
                                               <div className="col-sm-10">
                                                   <input
                                                       value={product.edu}
                                                       type='text'
                                                       className="form-control"
                                                   />
                                               </div>
                                           </div>
                                           <div className="form-group">
                                               <label className="control-label col-sm-2">Knowledge:</label>
                                               <div className="col-sm-10">
                                                   <input
                                                       value={product.kno}
                                                       type='text'
                                                       className="form-control"
                                                   />
                                               </div>
                                           </div>
                                           <div className="form-group ">
                                               <div className="col-sm-offset-2 col-sm-10">
                                                   <button className="btn btn-secondary" onClick={() => {ShoppingCartActions.emptyShoppingCart()}}>Delet</button>
                                                   <button className="btn btn-primary" onClick={Alert}>OK</button>
                                               </div>
                                           </div>
                                    </div>
                               )
                           }
                        })}
                    </div>
                </tbody>
            </table>
            );
    }
}

export default ShoppingCart;
    
