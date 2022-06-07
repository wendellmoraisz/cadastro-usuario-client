import React from 'react';
import "./app.css"
import { Login } from './components/user/login/index';
import { Register } from './components/user/register';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';

function App() {
  return(
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
