//import { getUnProducto } from "../../asyncmock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

//importamos nuevas: 
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/config";


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);

    const {idItem} = useParams();

    useEffect( ()=> {
        setLoading(true);

        const nuevoDoc = doc(db, "productos", idItem);

        getDoc(nuevoDoc)
            .then(res => {
                const data = res.data();
                const nuevoProducto = {id: res.id, ...data}
                setProducto(nuevoProducto);
            })
            .catch(error => console.log(error))
            .finally(()=> {
                setLoading(false);
            })

    },[idItem])

    /* useEffect(() => {
        getUnProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem]) */

    return (
        <div>
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer
