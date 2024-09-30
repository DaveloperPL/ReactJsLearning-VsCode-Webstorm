import logo from './logo.svg';
import './App.css';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='my-4'>
          Edit <code className='my'>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container mt-5">
      <div className="card bg-primary text-white p-4 shadow-lg" style={{ borderRadius: '15px' }}>
        <div className="card-body">
          <h4 className="card-title">Cool Blue Text Box</h4>
          <p className="card-text">
            This is a cool, blue-colored text box created using Bootstrap! It features a blue
            background, white text, and rounded corners.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
