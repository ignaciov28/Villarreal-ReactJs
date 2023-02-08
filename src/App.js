import React from "react";
import Navbar from "./components/header/Nabvar"
import ItemListContainer from "./components/header/ItemListContainer";


const App = () => {


  return ( 
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a mi tienda" />
    </>
  );
};

export default App;
