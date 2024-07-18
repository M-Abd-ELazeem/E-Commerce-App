import axios from "axios";
import { createContext, useEffect, useState } from "react";


export let CartContext = createContext();

export default function CartContextProvider(props) {
    ////// Token ////////
    let headers = {
        token: localStorage.getItem('userToken')
    }
    /////// count  ////////

    const [cartCount, setCartCount] = useState(null);
    const [cartId, setCartId] = useState(null);
    console.log();
    /////// Get  ////////

    function getCartItems() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers
        }).then((response) => {
            setCartCount(response?.data);
            setCartId(response.data.data._id);
            console.log(response.data.data._id);
            return response
        })
            .catch((error) => error)
    }


    /////// Add  ////////
    function addToCart(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId: productId
        }, {
            // headers: headers
            headers
        })
            .then((response) => {
                setCartCount(response.data);
                console.log(response);
                return response
            })
            .catch((err) => err)
    }


    /////// Delete  ////////
    function removeCartItems(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            headers
        }).then((response) => {
            setCartCount(response.data);
            return response
        })
            .catch((error) => error)
    }

    /////// Update  ////////
    function updateCartItems(productId, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            count: count
        }, {
            headers
        }).then((response) => {
            setCartCount(response.data);
            return response
        })
            .catch((error) => error)
    }

    /////// clear cart  ////////
    function clearCartItems() {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers
        }).then((response) => {
            setCartCount(null);
            return response
        })
            .catch((error) => error)
    }

    

    ////// checkout ////////
    function checkOut( url, formValue) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://m-abd-elazeem.github.io/E-Commerce-App/`, {
        // return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/667f99bfed0dc0016c5a909c?url=http://localhost:3000`, {
            shippingAddress: formValue
        }, {
            // headers: headers
            headers
        })
            .then((response) => {
                console.log(response ,'online');
                return response
            })
            .catch((err) => err)
    }

    ////// count cart set   //////////
    async function getCart() {
        let response = await getCartItems();
        setCartCount(response.data)
    }

    useEffect(() => {
        getCart()
    }, []);


    return <CartContext.Provider value={{ addToCart, getCartItems, removeCartItems, updateCartItems, clearCartItems, cartCount, setCartCount, checkOut }}>

        {props.children}
    </CartContext.Provider>
}
