import logo from './logo.svg';
import './App.css';
import {Router} from './Router/Router';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <Router></Router> 
    </BrowserRouter>
  );
}

export default App;
