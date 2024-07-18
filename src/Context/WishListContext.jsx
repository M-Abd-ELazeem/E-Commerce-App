import axios from "axios";
import { createContext, useState } from "react";



export let WishListContext = createContext();

export default function WishListContextProvider(props) {
    let headers = {
        token: localStorage.getItem('userToken')
    }

    /////// count  ////////

    const [wishListCount, setwishListCount] = useState(0);
            console.log(wishListCount);

    /////// Get  ////////

    function getWishListUser() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            headers
        }).then((response) => {
            setwishListCount(response.count);
            return response
        })
            .catch((error) => error)
    }


    /////// Add  ////////
    function addToWishList(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            productId: productId
        }, {
            headers
        })
            .then((response) => {
                setwishListCount(response.count);
                return response
            })
            .catch((err) => err)
    }


    /////// remove  ////////
    function removeFromWishList(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
            headers
        }).then((response) => {
            setwishListCount(response.count);
            return response
        })
            .catch((error) => error)
    }




    return <WishListContext.Provider value={{ getWishListUser, addToWishList, removeFromWishList, setwishListCount, wishListCount }}>

        {props.children}
    </WishListContext.Provider>
}
