import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Citas from './pages/citas';

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/citas' element={<Citas/>}/>
    </Routes>
  );
}

export default App;
