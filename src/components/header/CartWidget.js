import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <div style={styles.contenedorCart}>
            <ShoppingCartIcon fontSize="large" style={styles.carrito} />
            <div style={styles.notificacion}>3</div>
        </div>
    )
};

const styles = {
    contenedorCart: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    notificacion: {
        backgroundColor: "black",
        color: "white",
        borderRadius: "50%",
        width: 20,
        height: 20,
        textAlign: "center",
        fontSize: 12,
        marginLeft: -10,
        marginTop: -10,
        marginRight: 20,
    },
    carrito: {
        marginTop: 12,
        color: "white",
        },
};

export default CartWidget;