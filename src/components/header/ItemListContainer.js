import React from "react";

const ItemListContainer = (props) => {
    return (
        <div style={styles.contenedor}>
            <h1 style={styles.greeting}>
                {props.greeting}
            </h1>
        </div>
    );
};

const styles = {
    contenedor: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f2f2f2",
    },
    greeting: {
        fontSize: 20,
        color: "black",
    },
};

export default ItemListContainer;