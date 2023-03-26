import React from "react";
import { NavLink } from "react-router-dom";

const NavbarCats = () => {
    const categorias = [
    { id: 1, name: "Electronics", route: "/categories/electronics" },
    { id: 2, name: "Jewelery", route: "/categories/jewelery" },
    { id: 3, name: "Men's Clothing", route: "/categories/men's clothing" },
    { id: 4, name: "Women's Clothing", route: "/categories/women's clothing" },
    ];

    return (
    <nav style={styles.nav}>
        {categorias.map((category) => {
        return (
            <NavLink
            key={category.id}
            style={styles.categorias}
            className="separacionCategorias"
            to={category.route}
            >
            {category.name}
            </NavLink>
        );
        })}
    </nav>
    );
};

export const styles = {
    nav: {
    marginTop: 10,
    padding: 10,
    },
    categorias: {
    textDecoration: "none",
    color: "white",
    border: "none",
    marginRight: 20,
    },
};

export default NavbarCats;

