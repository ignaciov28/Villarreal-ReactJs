import React from "react";
import Card from "@mui/material/Card";
import {
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    CardActions,
} from "@mui/material";
import {Link} from 'react-router-dom'

const Item = ({ product }) => {
    return (
    <Card sx={{ maxWidth: 300 }} style={styles.container}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="250"
            image={product.image}
            alt={product.title}
        />
        <CardContent>
            <Typography
            gutterBottom
            variant="h5"
            component="div"
            style={styles.title}
            >
            {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            ${product.price}
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions style={styles.buttonContainer}>
        <Link to={`/product/${product.id}`}>
            <Button
            className="MuiButton-contained"
            style={styles.button}
            size="small"
            color="primary"
            >
            Ver Mas
            </Button>
        </Link>
        </CardActions>
    </Card>
    );
};

const styles = {
    container: {
    width: window.innerHeight > 900 ? "25%" : "90%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    },
    title: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    height: 100,
    },
    buttonContainer: {
    display: "flex",
    justifyContent: "center",
    },
    button: {
    textDecoration: "none",
    display: "inline-block",
    borderRadius: "25px",
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    margin: "0 auto",
    },
};

export default Item;