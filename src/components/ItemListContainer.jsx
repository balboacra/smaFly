
import { useEffect, useState } from "react"
import productJson from "../productList.json"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [item, setItem] = useState({})
    const {category} = useParams()
    console.log(category);


    const getItem = () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(productJson.find(p => p.category == category))
            }, 2000);
        })
    }
    
    useEffect(() => {
        getItem().then(data => {
            console.log(data);
            setItem(data);
        })
    }, [])



    return (
        <ItemList item={item}/>
    )
}

export default ItemListContainer