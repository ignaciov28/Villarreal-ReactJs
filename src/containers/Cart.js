import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { collection, addDoc, serverTimestamp, doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Cart = ({ isRed, estilo }) => {
    const { cart, totals, removeProduct } = useContext(CartContext);

    const buyer = {
    name: "Ignacio",
    apellido: "Villarreal",
    email: "ignaciov282@gmail.com",
    };

    const handlerClickSell = () => {
        updateStock().then(() => {
            const sellCollection = collection(db, "sells");
            addDoc(
            sellCollection,
            {
                buyer,
                items: cart,
                total: totals.total,
                time: serverTimestamp(),
            }
            )
            .then(result => console.log(result.id))
            .catch(error => console.log(error));
        });
        };

    const productIds = ['5NqzBN5buNqKjLVdJWnK', '8IlwtVE0BVNkeRYmBddB', 'B66uSfn8KE2ZTCLx5HMJ', 'C2F5nmmdlGPdRyrYh2be', 'Jd3ZqpNCWwDoUE6DIfW6', 'KG1IelEURInigtpTTo9T', 'Q3RYh8NMlkXE1fQWKjzL', 'glbwfzxrkEsGwmTefAX9', 'hldNbdzByOPWhSE4iPxS', 'pDpFxqoNPdoH0kl8KTED', 'vjbot1NFgMgXze1X07KE', 'xYjmQxXsEoljaKyQhOxi'];

    const updateStock = async () => {
        for (const id of productIds) {
        const docReference = doc(db, 'products', id);
        const docSnapshot = await getDoc(docReference);
        const stock = docSnapshot.data().stock;
        await updateDoc(docReference, { stock });
        }
    }
    
    updateStock();
    
    const styles = {
        cartContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f8f9fa",
            borderRadius: "10px",
            padding: "20px",
            marginTop: "50px",
            boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
        },
        productContainer: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            margin: "10px 0",

        },
        image: {
            width: "200px",
            height: "200px",
            objectFit: "contain",
            marginRight: "20px",
            borderRadius: "10px",
        },
        productInfo: {
            display: "flex",
            flexDirection: "column",
            fontSize: 20,
        },
        totalContainer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            
        },
        buyButton: {
            backgroundColor: "#007bff",
            color: "white",
            fontSize: "20px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s ease",
            marginTop: "20px",
            width: "100%",
            maxWidth: "200px",
            '&:hover': {
            backgroundColor: '#0069d9',
            },
        },
        deleteButton: {
            backgroundColor: "#dc3545",
            color: "white",
            fontSize: "16px",
            padding: "8px 16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s ease",
            marginTop: "20px",
            width: "100%",
            maxWidth: "200px",
            '&:hover': {
            backgroundColor: '#c82333',
            },
        },
        cartItem: {
            display: "flex",
            maxWidth: "800px",
            width: "100%",
            justifyContent: "space-between",
            
        },
        };
        

    return (
        <>
            {!cart.length ? (
            <>
                <h1 className={isRed ? "rojo" : "azul"}>
                No hay productos agregados, puedes verlos <Link to={"/"}>aca</Link>
                </h1>
                <h2 className={`tamanio ${estilo || ""}`}>Gracias por tu visita</h2>
            </>
            ) : (
            <div className="cart-container" style={styles.cartContainer}>
                <div className="cart-items-container" style={styles.cartItemsContainer}>
                {cart.map((product) => {
                    return (
                    <div key={product.id} className="cart-item" style={styles.productContainer}>
                        <img
                        src={product.image}
                        alt={product.title}
                        className="cart-item-image"
                        style={styles.image}
                        />
                        <div className="cart-item-details" style={styles.productInfo}>
                        <h3>{product.title}</h3>
                        <p>Precio: ${product.price}</p>
                        <p>Cantidad: {product.quantity}</p>
                        <button className="deleteButton" onClick={() => removeProduct(product.id)} style={styles.deleteButton}>
                            Eliminar
                        </button>
                        </div>
                    </div>
                    );
                })}
                </div>
                <div className="cart-totals" style={styles.totalContainer}>
                <h3>Total: ${totals.total}</h3>
                <button className="buyButton" onClick={handlerClickSell} style={styles.buyButton}>
                    Comprar
                </button>
                </div>
            </div>
            )}
        </>
        );
            }      

export default Cart;