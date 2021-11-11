import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import { Signup } from './components/Signup';
import { Details } from './components/Details';
import { Provider } from 'react-redux';
import { Store } from './redux_stuff/store';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />}/>
      <Route path="/details" element={<Details />}/>
    </Routes>
  );
}

const AppWrapper=()=>{
  return(
  <Provider store={Store}>
    <App />
  </Provider>
  )
}

export default AppWrapper;
