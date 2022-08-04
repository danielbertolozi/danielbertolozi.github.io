import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cars from './components/pages/Cars/Cars';
import Home from './components/pages/Home/Home';
import Photography from './components/pages/Photography/Photography';
import Professional from './components/pages/Professional/Professional';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/cars" element={ <Cars /> }/>
        <Route path="/photos" element={ <Photography /> }/>
        <Route path="/pro" element={ <Professional /> }/>
      </Routes>
    </div>
  );
}

export default App;
