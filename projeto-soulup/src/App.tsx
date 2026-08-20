import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    <div style={{ padding: "50px", textAlign: "center", minHeight: "60vh" }}>
          <h2>Testando Navbar e Footer.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, vel.</p>
        </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}