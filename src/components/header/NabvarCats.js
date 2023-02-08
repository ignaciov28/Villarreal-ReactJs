import React from "react";

const NavbarCats = () => {
    
    const categorias = [
        {id: 1, name: "Telefonos"}, 
        {id: 2, name: "Computadoras"}, 
        {id: 3, name: "Accesorios"},
    ];
    
    return (

        <nav style={styles.nav}>
            {
                categorias.map( (category) => {
                    return <a key={category.id} style={styles.cat}  href="">{category.name}</a>
                })
            }
        </nav>
    );    
};


export const styles = {
    nav: {
        marginTop: 10,
        padding: 10,
    },
    cat: {
        textDecoration: 'none',
        color: 'white',
        border: 'none',
        marginRight: 20,
    },
    }

export default NavbarCats
