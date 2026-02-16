import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import BlobCursor from "./component/BlobCursor"
import Home from "../assets/pages/home";
import Reserva from "../assets/pages/reserva";
import ScrollToTop from "../components/scrolltoTop/scrollToTop"

export default function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <BlobCursor />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}
