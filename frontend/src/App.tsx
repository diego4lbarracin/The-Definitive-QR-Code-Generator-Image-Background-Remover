import { Routes, Route } from "react-router-dom";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { HomePage } from "./features/home/HomePage";
import { DonatePage } from "./features/donate/DonatePage";

function App() {
  return (
    <div className="min-h-screen bg-gray-500 flex flex-col">
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
