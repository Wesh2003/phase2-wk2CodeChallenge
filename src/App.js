import { Routes, Route, redirect } from 'react-router-dom';
import './App.css';
import BotCollection from './components/BotCollection';

function App() {
  return (
    <>
    <Home/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/collection' element={<BotCollection/>}></Route>
    </Routes>

  </>
  );
}

export default App;
