import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const greetingEstilo = {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 20,
}

export const ItemListContainer = ({ greeting }) => {
const [products, setProducts] = useState([]);
const [error, setError] = useState(false);
const { name } = useParams();
const URL = name ? `https://fakestoreapi.com/products/category/${name}` : "https://fakestoreapi.com/products";


useEffect(() => {


    const getProducts = async () => {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        setProducts(data);
    } catch {
        setError(true);
    }
    };

    getProducts();
}, [name]);

const onAdd = (count) => {
    console.log(`el usuario selecciono ${count} `);
};

return (
    <>
        <h1 style={greetingEstilo}>{greeting}</h1>
    {!error ? (
        <>
        {products.length ? (
            <ItemList products={products} />
        ) : (
            <h1>Cargando...</h1>
        )}
        </>
    ) : (
        <h1>Ha ocurrido un error</h1>
    )}
    </>
);
};

export default ItemListContainer;






