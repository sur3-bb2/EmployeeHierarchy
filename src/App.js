import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ListReportee} from "./ListReportees";

function App({ users, reporteeMap }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
        {
          [...new Set(reporteeMap.map(r => r.manager_id))].map((id, index) => <ListReportee key={index} managerId={id} users={users} />)
        }
        </div>
      </header>
    </div>
  );
}

export default App;
