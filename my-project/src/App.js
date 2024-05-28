import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Home from './screens/Home';
import AdminRegister from './users/register.jsx';
import Login from "./users/login.jsx";


function App() {
  return (
    <Router>
    <div> <Routes> 
      <Route index path="/" element={<Home/>}/>
      <Route path='/register' element={<AdminRegister></AdminRegister>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      </Routes></div>
    </Router>
  );
}

export default App;
