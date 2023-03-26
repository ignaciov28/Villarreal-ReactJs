import React from "react";
import Navbar from "./components/header/Navbar";
import ItemListContainer from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./context/CartContext";

const App = () => {
  const greeting = "Encuentra lo que estas buscando";
  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar />
          <h1 style={styles.title}>{greeting}</h1>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={greeting} />}
            />

            <Route
              path="/categories/:name"
              element={<ItemListContainer greeting={greeting} />}
            />

            <Route
              path="/product/:id"
              element={<ItemDetailContainer greeting={greeting} />}
            />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

const styles = {
  title: {
    fontSize: "32px",
    textAlign: "center",
    marginTop: "20px",
  },
};

export default App;