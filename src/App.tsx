
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signup } from './components/Signup';
import { Details } from './components/Details';



function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route  path="/" element={<Signup />}/>
        <Route  path="/details" element={<Details />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
