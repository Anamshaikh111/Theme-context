import React, { Children, createContext, useContext, useEffect, useState}  from 'react';

const CartContext = createContext();
const CartProvider = ({ children }) => {
    const [cart, setCart ] = useState([]);
    const [cartLength, setCartLength] = useState(0);

    const addtoCart = (item) => {
        setCart([...cart, item]);
        setCartLength(cart.length);
        console.log("cart", cart);
        console.log("length", cartLength);
    };

    const RemoveFromCart = (id) => {
        setCart(()=>cart.filter((item) => item.prodID !== id));
        setCartLength(cart.length);
    };
    console.log("cart", cart);
    useEffect(() => {
        setCartLength(cart.length);
    }, [cart]);
    console.log("length", cartLength);
    return (
        <CartContext.Provider
        value={{cart, cartLength, setCart, addtoCart, RemoveFromCart}}
        >
            {children}
        </CartContext.Provider>
    )
}