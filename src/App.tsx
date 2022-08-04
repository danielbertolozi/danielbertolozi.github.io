import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cars from './pages/Cars';
import Home from './pages/Home';
import Photography from './pages/Photography';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/cars" element={ <Cars /> }/>
        <Route path="/photos" element={ <Photography /> }/>
      </Routes>
    </div>
  );
}

export default App;
