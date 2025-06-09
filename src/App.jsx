import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Citas from './pages/Citas.jsx';
import AdministrarCitas from './pages/AdministrarCitas';
import Navbar from './componentes/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citas" element={<Citas />} />
          <Route path="/administrar" element={<AdministrarCitas />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
