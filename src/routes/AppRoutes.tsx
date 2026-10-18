import { Routes, Route } from 'react-router-dom'

import Home from "../pages/Home/Home";
import Sobre from "../pages/Sobre/Sobre";
import Faq from "../pages/Faq/Faq";
import Desafios from "../pages/Desafios/Desafios";
import Solucao from "../pages/Solucao/Solucao";
import Contato from "../pages/Contato/Contato";
import QuemSomos from "../pages/QuemSomos/QuemSomos";
import Login from "../pages/Login/Login";
import Perfil from "../pages/Perfil/Perfil";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pagina-sobre" element={<Sobre />} />
            <Route path="/pagina-faq" element={<Faq />} />
            <Route path="/pagina-desafio" element={<Desafios />} />
            <Route path="/pagina-desafio/:id" element={<Desafios />} />
            <Route path="/pagina-solucao" element={<Solucao />} />
            <Route path="/pagina-contato" element={<Contato />} />
            <Route path="/pagina-quemsomos" element={<QuemSomos />} />
            <Route path="/pagina-login" element={<Login />} />
            <Route path="/pagina-perfil" element={<Perfil />} />
        </Routes>
    )
}