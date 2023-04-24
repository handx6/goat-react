import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StevePage from './pages/StevePage';
import MarkPage from './pages/MarkPage';
import ElonPage from './pages/ElonPage';
import ErrorPage from './pages/ErrorPage';
import Navigation from './components/navbar/navbar/Navigation';
import JackPage from './pages/JackPage';
import Footer from './components/navbar/footer/Footer';
import ContactPage from './pages/ContactPage';
import BillPage from './pages/BillPage';
import { useState } from 'react';

function App() {
  const [bg, setBg] = useState("bg-[#5f43fb]");
  
  return (
    <Router>
      <Navigation bg={bg} setBg={setBg}/>
      <main className="px-20 py-20">
        <Routes>
          <Route path="/" element={<StevePage />} />
          <Route path="/mark" element={<MarkPage />} />
          <Route path="/elon" element={<ElonPage />} />
          <Route path="/jack" element={<JackPage />} />
          <Route path="/bill" element={<BillPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer bg={bg}/>
    </Router>
  );
}

export default App;
