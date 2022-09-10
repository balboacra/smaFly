import {ItemDetail} from "./ItemDetail"
import { useEffect, useState } from "react"
import productJson from "../productList.json"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    // const {id} = useParams()
    
    useEffect(() => {
        getItem().then(data => {
            console.log(data);
            setItem(data);
        })
    }, [])

    const getItem = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(productJson[9])
            }, 2000);
        })
    }

    return (
        <ItemDetail item={item}/>
    )
}

export default ItemDetailContainer