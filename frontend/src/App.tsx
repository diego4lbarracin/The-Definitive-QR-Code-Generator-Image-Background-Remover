import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DonatePage from './pages/DonatePage';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
