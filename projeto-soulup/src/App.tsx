import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./css/index.css";
//img import
import iconSoulUp from "./img/img-icon.ico";
export default function App() {
  //Imports

  return (
    <BrowserRouter>
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Soul Up</title>
        <link rel="stylesheet" href="./css/index.css"/>
        <link rel="shortcut icon" href={iconSoulUp} type="image/x-icon"/>
        <link href="https://fonts.googleapis.com/css2?family=Hind:wght@400;500;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"/>
        <script src="./js/auth-check.js" defer></script>
        <script src="./js/btn-mobile.js" defer></script>
      </head>
      <div>
        <Navbar/>
          <div style={{ padding: "50px", textAlign: "center", minHeight: "60vh" }}>
            <h2>Testando Navbar e Footer.</h2>
            <p>Conteudo muito legal.</p>
          </div>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}