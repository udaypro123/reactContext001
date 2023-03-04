import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Service from './components/Service';
import { createContext, useState } from 'react';
import Para from './components/Para';

export const globaldata = createContext();



function App() {

  const [state, setstate] = useState(false)
  return (
    <globaldata.Provider value={state}>

      <div className="App" style={state?{backgroundColor:"rgb(18, 225, 139)",color:"black"}:{backgroundColor:"white"}}>
        <Para/>
        <p>Geekster</p>

        <Navbar />
        <button onClick={()=>{setstate(!state)}}>Toogle the dark theme</button>
        <Routes>
          <Route path='/Home' element={ <Home /> } />
          <Route path='/Contact' element={ <Contact /> } />
          <Route path='/Service' element={ <Service /> } />
        </Routes>

      </div>
    </globaldata.Provider>

  );
}

export default App;
