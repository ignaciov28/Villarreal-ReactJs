import React from "react";
import logo from "../../assets/appletech.png";
import { styles } from "./NavbarStyle";
import NavCategories from "./NabvarCats";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
return (
    <header style={styles.container}>
    <Link style={styles.imagenes} to={"/"}>
        <img style={styles.imagenes} src={logo} alt="tienda online" />
    </Link>
    <NavCategories style={styles.categorias} />
    <Link to={"/cart"}>
        <CartWidget />
    </Link>
    </header>
);
};

export default Navbar;
