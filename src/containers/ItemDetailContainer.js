import React, { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import {db} from "./../firebase/firebase";
import { doc, getDoc, collection } from "firebase/firestore";


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
    const productsCollection = collection(db,'products');
    const refDoc = doc(productsCollection,id)
    getDoc(refDoc).then(
        (data)=>{
        setProduct({
            id:data.id,
            ...data.data(),
        });
        }
    )
    .finally(()=>{ 
        setLoading(false);
    })
    },[]);

    return (
        
    <>
        {loading ? (
        <h1>Cargando...</h1>
        ) : (
        <div style={styles.container}>
            <ItemDetail product={product} />
        </div>
        )}
    </>
    );
};

const styles = {
    container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
    },
};
