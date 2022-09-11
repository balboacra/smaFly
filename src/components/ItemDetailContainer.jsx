import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react"
import productJson from "../productList.json"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const {id} = useParams()
    console.log(id);


    const getItem = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(productJson.find(p => p.id == id))
            }, 2000);
        })
    }
    
    useEffect(() => {
        getItem().then(data => {
            console.log(data);
            setItem(data);
        })
    }, [id])



    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer