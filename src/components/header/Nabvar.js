import React from "react";
import logo from "../../assets/appletech.png";
import { styles } from "./NavbarStyle";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarCats from "./NabvarCats";
import CartWidget from "./CartWidget";

const Navbar = () => {

    
    return (
        <header style={styles.container}>
        <img style={styles.img} src={logo} alt="logo appletech" />
        

        <NavbarCats />
        <CartWidget />

        </header>
    )
};



export default Navbar;
