import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// Importando as páginas
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Faq from "./pages/Faq";
import Desafios from "./pages/Desafios";
import Solucao from "./pages/Solucao";
import Contato from "./pages/Contato";
import QuemSomos from "./pages/QuemSomos";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";

export default function App() {
  //Imports

  return (
    <BrowserRouter>
        <div className="min-h-screen w-full max-w-full overflow-x-hidden">
        {/* Navbar e Footer ficam fixos em todas as páginas */}
          <Navbar/>
            <main>
              <Routes>
                {/* Cada Route define qual página aparece em uma URL específica */}
                <Route path="/" element={<Home />} />
                <Route path="/pagina-sobre" element={<Sobre />} />
                <Route path="/pagina-faq" element={<Faq />} />
                <Route path="/pagina-desafio" element={<Desafios />} />
                <Route path="/pagina-solucao" element={<Solucao />} />
                <Route path="/pagina-contato" element={<Contato />} />
                <Route path="/pagina-quem-somos" element={<QuemSomos />} />
                <Route path="/pagina-login" element={<Login />} />
                <Route path="/pagina-perfil" element={<Perfil />} />
              </Routes>
            </main>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}