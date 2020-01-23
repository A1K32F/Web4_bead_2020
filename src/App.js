import React from 'react';
import './App.css';
import CVCandidateForm from './CVCandidateForm'
import CandidateForm from "./CandidateForm";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <table>
              <tr>
                  <td>
                      <CandidateForm/>
                      <br/>
                  </td>
                  <td>
                      <CVCandidateForm/>
                  </td>
              </tr>
          </table>
      </header>
    </div>
  );
}
export default App;
