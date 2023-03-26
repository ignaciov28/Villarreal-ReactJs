import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { totals } = useContext(CartContext);
    return (
    <div style={styles.contenedorCart}>
        <ShoppingCartIcon fontSize="large" style={styles.carrito} />
        {totals.qty > 0 && <p>{totals.qty}</p>}
    </div>
    );
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
        marginLeft: -30,
        marginTop: -10,
        marginRight: 40,
    },
    carrito: {
        marginTop: 12,
        color: "white",
        },
};

export default CartWidget;
