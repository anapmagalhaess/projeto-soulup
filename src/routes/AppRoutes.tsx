import { Routes, Route } from 'react-router-dom'

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Faq from "../pages/Faq";
import Desafios from "../pages/Desafios";
import Solucao from "../pages/Solucao";
import Contato from "../pages/Contato";
import QuemSomos from "../pages/QuemSomos";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagina-sobre" element={<Sobre />} />
            <Route path="/pagina-faq" element={<Faq />} />
            <Route path="/pagina-desafios" element={<Desafios />} />
            <Route path="/pagina-solucao" element={<Solucao />} />
            <Route path="/pagina-contato" element={<Contato />} />
            <Route path="/pagina-quemsomos" element={<QuemSomos />} />
            <Route path="/pagina-login" element={<Login />} />
            <Route path="/pagina-perfil" element={<Perfil />} />
        </Routes>
    )
}