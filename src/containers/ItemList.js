import React, { useState } from "react";
import Item from "./Item";
import ItemDetail from "./ItemDetail";

const styles = {
container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 1200,
    margin: '0 auto',
},
};

const ItemList = ({ products }) => {
const [selectedProduct, setSelectedProduct] = useState(null);

const handleClick = (product) => {
    setSelectedProduct(product);
};

return (
    <>
    {selectedProduct ? (
        <ItemDetail product={selectedProduct} />
    ) : (
        <div style={styles.container}>
        {products.map((product) => (
            <Item
            key={product.id}
            product={product}
            onClick={() => handleClick(product)}
            />
        ))}
        </div>
    )}
    </>
);
};

export default ItemList;
