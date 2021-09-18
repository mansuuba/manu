import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          mansuuba to reload.
          <Button variant="contained">Hello World</Button>
          here we are slow
        </p>
      </header>
    </div>
  );
}

export default App;
