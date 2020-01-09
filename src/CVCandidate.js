import React from 'react';
import CVStore from "./CVStore";
import CVCandidateActions from "./CVCandidateActions";
import logo from "./logo.svg";
import Alert from "./Alert";
import './App.css';

class CVCandidate extends React.Component{

    constructor(props){
        super(props);
        this._onChange = this._onChange.bind(this);
        this.state = {candidate : [{fn :'',ln:'',email:'',edu:'',kno:''}]}
    }

    _onChange(){
        this.setState({candidate : CVStore._candidate});
    }

    componentDidMount(){
        CVStore.addChangeListener(this._onChange)
    }

    componentWillUnmount(){
        CVStore.removeChangeListener(this._onChange)
    }

    render(){
        console.log(this.props.candidate);

        return (
            <table>
                <tbody>
                    <div>
                       {this.state.candidate.map((candidate)=>{
                           if(candidate.fn.length<1)
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
                                                       value={candidate.fn+" "+candidate.ln}
                                                       type='text'
                                                       className="form-control"
                                                   />
                                               </div>
                                           </div>
                                           <div className="form-group">
                                               <label className="control-label col-sm-2">Email: </label>
                                               <div className="col-sm-10">
                                                   <input
                                                       value={candidate.email}
                                                       type='text'
                                                       className="form-control"
                                                   />
                                               </div>
                                           </div>
                                           <div className="form-group">
                                               <label className="control-label col-sm-2">Education:</label>
                                               <div className="col-sm-10">
                                                   <input
                                                       value={candidate.edu}
                                                       type='text'
                                                       className="form-control"
                                                   />
                                               </div>
                                           </div>
                                           <div className="form-group">
                                               <label className="control-label col-sm-2">Knowledge:</label>
                                               <div className="col-sm-10">
                                                   <input
                                                       value={candidate.kno}
                                                       type='text'
                                                       className="form-control"
                                                   />
                                               </div>
                                           </div>
                                           <div className="form-group ">
                                               <div className="col-sm-offset-2 col-sm-10">
                                                   <button className="btn btn-secondary" onClick={() => {CVCandidateActions.emptyCVCandidate()}}>Delet</button>
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

export default CVCandidate;
    
