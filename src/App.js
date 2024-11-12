import './App.css';
import AllBlocks from './components/AllBlocks';
import AryabhattaRooms from './components/AryabhattaRooms';
import AryabhattaLabs from './components/AryabhattaLabs';
import KCRooms from './components/KCRooms';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RamanujanRooms from './components/RamanujanRooms';
import BhabhaRooms from './components/BhabhaRooms';
import RamanRooms from './components/RamanRooms';
import Footer from './components/Footer';
import Header from './components/Header';
import KCLabs from './components/KCLabs';
import RamanujanLabs from './components/RamanujanLabs';
import RamanLabs from './components/RamanLabs';
import BhabhaLabs from './components/BhabhaLabs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Header /><AllBlocks /><Footer /></>} />
          <Route path="/ab/:id" element={<AryabhattaRooms />} />
          <Route path="/ab/labs" element={<AryabhattaLabs />} />
          <Route path="/kc/rooms" element={<KCRooms />} />
          <Route path="/kc/labs" element={<KCLabs />} />
          <Route path="/rj/rooms" element={<RamanujanRooms />} />
          <Route path="/rj/labs" element={<RamanujanLabs />} />
          <Route path='/bb/rooms' element={<BhabhaRooms />} />
          <Route path='/bb/labs' element={<BhabhaLabs />} />
          <Route path='/rm/rooms' element={<RamanRooms />} />
          <Route path='/rm/labs' element={<RamanLabs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
