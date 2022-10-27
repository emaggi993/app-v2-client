import { createContext, useState, useEffect , useContext} from "react";
import { postOrder } from "../api/products.api";
import { UserContext } from "./ContextUser";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const { user } =  useContext(UserContext)
    const [cartItems, setcartItems] = useState(() => {
        try{
            const productosEnLocalStorage = localStorage.getItem("cartProducts");
            return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
        } catch (error){
            return [];
        }
    })
    const sendOrder= async (order)=>{
        const respuesta =await postOrder(order)
        console.log(respuesta)
        if (respuesta.status === 200){
            setcartItems([])
        }
    }
    useEffect(()=>{
        localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    }, [cartItems]);
    const lenCartItems = ()=>{
        return cartItems.length
    }
    const editItemsToCart = (product) => {
        if (typeof(product.amount) !== 'number'){
            return [false, product]
        }
        if (product.amount < 1){
            return [false, product]
        }
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
            return [true, product]
        }
        return [false, product]
    };
    const addItemsToCart = (product) => {
        // delete product.blob_imagen
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
            const p = {
                "id": product.id,
                "descripcion": product.descripcion,
                "precio": product.precio
            }
            setcartItems([...cartItems, {...p, amount: 1}])
        }
    };
    const confirmaCarrito = ()=>{
        const order= {
            "cod_usuario_sistema": user.cod_usuario_sistema,
            "total": total,
            "fecha": Date.now(),
            "details": JSON.stringify(cartItems)
        }
        sendOrder(order)
    }
    const total = cartItems.reduce((previous, current) => previous + current.amount * current.precio, 0);
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
            <CartContext.Provider value= {{cartItems, addItemsToCart, deleteItemToCart, editItemsToCart, confirmaCarrito, total, lenCartItems}}>
                {children}
            </CartContext.Provider>
        )

}
