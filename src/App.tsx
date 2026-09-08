import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

// Importando as páginas
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Faq from "./paginas/Faq";
import Desafios from "./paginas/Desafios";
import Solucao from "./paginas/Solucao";
import Contato from "./paginas/Contato";
import QuemSomos from "./paginas/QuemSomos";
import Login from "./paginas/Login";
import Perfil from "./paginas/Perfil";

export default function App() {
  //Imports

  return (
    <BrowserRouter>
        <div>
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