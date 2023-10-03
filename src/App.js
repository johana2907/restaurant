import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './componentes/header/Header';
import NuestroRestaurante from './componentes/nuestro-reataurante/NuestroRestaurante';
import Carta from './componentes/carta/Carta';
import Footer from './componentes/footer/Footer';
import Reservas from './componentes/reservas/Reservas';


function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<NuestroRestaurante/>} />
        <Route path='/carta' element={<Carta />} />
        <Route path='/reservas' element={<Reservas />} />
      </Routes>
      <Footer />
      
        
      


    </div>
  );
}

export default App;
