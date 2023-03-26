import React, { useState, useContext, useEffect } from "react";
import ItemCount from "../components/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { addProduct } = useContext(CartContext);
  const [stock, setStock] = useState(null);

  useEffect(() => {
    const getStock = async () => {
      const docRef = doc(db, "products", product.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setStock(docSnap.data().stock);
      } else {
        console.log("No such document!");
      }
    };
    getStock();
  }, [product.id]);

  const onAdd = (count) => {
    setIsPressedButton(true);
    addProduct(product, count);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={product.image} alt={product.title} style={styles.image} />
        <div style={styles.smallImagesContainer}>
          <img
            src={product.image}
            alt={`${product.title} small image 1`}
            style={styles.smallImage}
          />
          <img
            src={product.image}
            alt={`${product.title} small image 2`}
            style={styles.smallImage}
          />
          <img
            src={product.image}
            alt={`${product.title} small image 3`}
            style={styles.smallImage}
          />
        </div>
      </div>
      <div style={styles.infoContainer}>
        <h1 style={styles.title}>{product.title}</h1>
        <p style={styles.description}>{product.description}</p>
        <p style={styles.price}>${product.price}</p>
        {stock ? (
          <>
            <p>Stock: {stock}</p>
            {isPressedButton ? (
              <Link to="/cart">
                <button style={styles.finishButton}>Finalizar compra</button>
              </Link>
            ) : (
              <ItemCount onAdd={onAdd} />
            )}
          </>
        ) : (
          <p>Cargando stock...</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "25px",
  },
  imageContainer: {
    flex: "0 0 40%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20px",
    borderRadius: "25px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "contain",
    borderRadius: "25px",
  },
  smallImagesContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
    width: "100%",
  },
  smallImage: {
    width: "30%",
    height: "50px",
    objectFit: "contain",
    borderRadius: "10px",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ItemCount: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "16px",
    margin: "0",
  },
  price: {
    fontSize: "20px",
    margin: "10px 0",
  },
  finishButton: {
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "20px",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s ease",
    marginRight: "20px",
    marginTop: "30px",
  }
};

export default ItemDetail;
