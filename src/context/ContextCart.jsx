import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setcartItems] = useState(() => {
        try{
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        } catch (error){
            return [];
        }
    })

    useEffect(()=>{
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }, [cartItems]);
    const editItemsToCart = (product) => {
        
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );
        if(inCart){
            setcartItems(
                cartItems.map((productInCart)=> {
                    if(productInCart.id === product.id){
                        return {...inCart, amount: product.amount}
                    }
                    return productInCart
                })
            );
        }
        // return [false, product]
    };
    const addItemsToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );
        if(inCart){
            setcartItems(
                cartItems.map((productInCart)=> {
                    if(productInCart.id === product.id){
                        return {...inCart, amount: inCart.amount + 1}
                    }
                    return productInCart
                })
            );
        }else {
            setcartItems([...cartItems, {...product, amount: 1}])
        }
    };
    const deleteItemToCart = (product)=>{
        const inCart = cartItems.find(
            (productInCart)=> productInCart.id === product.id
        );
        if (inCart.amount === 1){
            setcartItems(
                cartItems.filter((productInCart)=> productInCart.id !== product.id)
            );
        }else{
            setcartItems(
                cartItems.map((productInCart)=>{
                    if(productInCart.id === product.id){
                        return {...inCart, amount: inCart.amount - 1};
                    }
                    return productInCart;
                    
                })
            );
        }
    };
    return (
            <CartContext.Provider value= {{cartItems, addItemsToCart, deleteItemToCart, editItemsToCart}}>
                {children}
            </CartContext.Provider>
        )

}
