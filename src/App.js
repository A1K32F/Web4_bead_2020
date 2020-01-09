import React from 'react';
import './App.css';
import CVCandidate from './CVCandidate'
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
                      <CVCandidate/>
                  </td>
              </tr>
          </table>
      </header>
    </div>
  );
}
export default App;
