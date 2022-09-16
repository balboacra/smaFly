import React, { useContext, useState } from 'react';

const CartContext = React.createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({ defaultvalue = [], children }) => {

    const [cart, setCart] = useState(defaultvalue)

    const addToCart = (item) => {
        setCart(prevstate => prevstate.concat(item))
    }

    const clearCart = () => { setCart([]) }

    const context = {
        cart,
        addToCart,
        clearCart,
    }

    return (
        <CartProvider.Provider value={context}>
            {children}
        </CartProvider.Provider>
    )
}


export { useCart, CartProvider }