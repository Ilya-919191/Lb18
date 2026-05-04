import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import AboutMe from "./pages/AboutMe";
import MyCity from "./pages/MyCity";
import MyFuture from "./pages/MyFuture";
import Footer from "./components/Footer/Footer";
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="mainContent">
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/my-city" element={<MyCity />} />
          <Route path="/my-future" element={<MyFuture />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
