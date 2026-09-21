import AppRoutes from './routes/AppRoutes'

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";


export default function App() {
  return (
      <>
        <Navbar />
        <AppRoutes />
        <Footer />
      </>
  );
}