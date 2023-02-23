import React from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import Cart from "./containers/Cart";
import ProductDetail from "./containers/ItemDetail.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const greeting = "Encuentra lo que estás buscando";

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={greeting} />} />

          <Route
            path="/categories/:name"
            element={<ItemListContainer greeting={greeting} />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetail greeting={greeting} />}
          />

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

