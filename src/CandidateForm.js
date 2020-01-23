import React from 'react'
import CVCandidateActions from "./CVCandidateActions";
import logo from "./logo.svg";
import './App.css';


class CandidateForm extends React.Component{

    constructor(props) {
        super(props);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange=this.handleLastNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleEducationChange=this.handleEducationChange.bind(this);
        this.handleKnowledgeChange=this.handleKnowledgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {fn :'',ln:'',email:'',edu:'',kno:''}
    }

    handleFirstNameChange(event){
        this.setState({fn : event.target.value})
    }
    handleLastNameChange(event){
        this.setState({ln:event.target.value})
    }
    handleEmailChange(event){
        this.setState({email: event.target.value})
    }
    handleEducationChange(event){
        this.setState({edu:event.target.value})
    }
    handleKnowledgeChange(event){
        this.setState({kno:event.target.value})
    }

    handleSubmit(event){
        CVCandidateActions.insertCandidate({
            fn :this.state.fn,
            ln:this.state.ln,
            email:this.state.email,
            edu:this.state.edu,
            kno:this.state.kno

        })
        this.setState({fn :'',ln:'',email:'',edu:'',kno:''});
    }


    render(){
        return (
                <table>
                    <tr>
                        <td>
                        <div class="container">
                            <div class="form-group">
                                <tr>
                                    <td>
                                        <img src={logo} className="App-logo" alt="logo"/>
                                    </td>
                                    <td>
                                        <h2>CV Generator</h2>
                                    </td>
                                </tr>
                            </div>
                            <div class="form-group">
                                <label className="control-label col-sm-2">Firstname: </label>
                                <div className="col-sm-10">
                                    <input
                                        value={this.state.fn}
                                        type='text'
                                        onChange={this.handleFirstNameChange}
                                        placeholder="Kovács"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2">LastName: </label>
                                <div className="col-sm-10">
                                    <input
                                        value={this.state.ln}
                                        type='text'
                                        onChange={this.handleLastNameChange}
                                        placeholder="János"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2">Email: </label>
                                <div className="col-sm-10">
                                    <input
                                        value={this.state.email}
                                        type='text'
                                        onChange={this.handleEmailChange}
                                        placeholder="cvgenerator@cv.com"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2">Education:</label>
                                <div className="col-sm-10">
                                    <input
                                        value={this.state.edu}
                                        type='text'
                                        onChange={this.handleEducationChange}
                                        placeholder="Car mechanic"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-sm-2">Knowledge:</label>
                                <div className="col-sm-10">
                                    <input
                                        value={this.state.kno}
                                        type='text'
                                        onChange={this.handleKnowledgeChange}
                                        placeholder="Max 500 characters"
                                        class="form-control"
                                    />
                                </div>
                            </div>
                            <div className="form-group ">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button className="btn btn-primary" id="bt" onClick={this.handleSubmit}>Save</button>
                                </div>
                            </div>
                        </div>
                        </td>
                    </tr>
                </table>
        )
    }
}
export default CandidateForm