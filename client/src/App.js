import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";

import { TemplateProvider } from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/itemDetails/DetailView";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/product/:id" element={<DetailView />}></Route>
          </Routes>
        </Router>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
