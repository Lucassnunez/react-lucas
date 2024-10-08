import React, {useState} from "react";

const ItemCount = ({initial,stock}) => {
    
    const [contador, setContador] = useState(1);
    const decrementar = () => {
        if(contador > initial){
            setContador(contador-1)
        }
    }
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador+1)
        }
    }
    const agregarProducto = () => {
        
    }
    return (
        <div>
            <p>{contador}</p>
            <button onClick={decrementar}>-</button>
            <button onClick={agregarProducto}>Agregar al carrito</button>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default ItemCount