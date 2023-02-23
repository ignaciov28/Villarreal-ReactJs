import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({ match }) => {
const [product, setProduct] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${match.params.id}`)
    .then((response) => response.json())
    .then((data) => {
        setProduct(data);
        setLoading(false);
    })
    .catch((error) => console.log(error));
}, [match.params.id]);

return loading ? (
    <div>Loading...</div>
) : (
    <div>
    <ItemDetail product={product} />
    </div>
);
};

export { ItemDetailContainer };