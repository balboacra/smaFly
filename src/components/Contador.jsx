import { useState } from "react";

const Contador = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial);

    const aumentarContador = () => {
        if (contador < stock) setContador(contador + 1);
    }

    const disminuirContador = () => {
        if (contador > initial) setContador(contador - 1);
    }

    return (
        <>
            <button className="btn btn-dark m-2" onClick={disminuirContador}>-</button>
            <span className="strong">{contador}</span>
            <button className="btn btn-dark m-2" onClick={aumentarContador}>+</button>
            <div><button className="btn border-dark" onClick={()=>onAdd(contador)}>Agregar al Carrito</button></div>
        </>
    );
}
export default Contador