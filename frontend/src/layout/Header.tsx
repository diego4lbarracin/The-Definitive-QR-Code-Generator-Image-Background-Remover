import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDonatePage = location.pathname === "/donate";

  return (
    <header className="bg-black border-b border-slate-700 py-6 px-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-100">
          The Definitive QR Code Generator & Image Background Remover
        </h1>
        <button
          onClick={() => navigate(isDonatePage ? "/" : "/donate")}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-orange-500/50"
        >
          {isDonatePage ? "Back to Home" : "Donate here ;)"}
        </button>
      </div>
    </header>
  );
};
