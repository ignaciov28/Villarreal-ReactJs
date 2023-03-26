import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);

    return (
    <div>
        <Link to="/cart">
        <i className="fa fa-shopping-cart"></i>
        {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </Link>
    </div>
    );
};

export default CartWidget;
