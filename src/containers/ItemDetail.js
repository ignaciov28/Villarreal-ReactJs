import React, { useState } from "react";

const ItemDetail = ({ product }) => {
const [styles] = useState({
    root: {
    maxWidth: 345,
    backgroundColor: "#f2f2f2",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0px 3px 15px rgba(0, 0, 0, 0.2)",
    },
    media: {
    height: 140,
    borderRadius: "10px",
    },
    title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "1rem",
    },
    description: {
    marginBottom: "1rem",
    },
    price: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    },
    button: {
    backgroundColor: "#4caf50",
    color: "white",
    "&:hover": {
        backgroundColor: "#388e3c",
    },
    },
});

return (
    <div style={styles.root}>
    <img src={product.image} alt={product.title} style={styles.media} />
    <h1 style={styles.title}>{product.title}</h1>
    <p style={styles.description}>{product.description}</p>
    <p style={styles.price}>Price: {product.price}</p>
    <button style={styles.button}>Add to cart</button>
    </div>
);
};

export default ItemDetail;