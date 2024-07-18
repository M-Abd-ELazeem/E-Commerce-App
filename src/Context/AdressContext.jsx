// // AddressContext.js
// import React, { createContext, useState } from 'react';

// export const AddressContext = createContext();

// export default function AddressProvider(props) {
//     let headers = {
//         token: localStorage.getItem('userToken')
//     }

//     function getAdress() {
//         return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
//             headers
//         }).then((response) => {
//             setCartCount(response.data.numOfCartItems);
//             return response
//         })
//             .catch((error) => error)

//     }




//     return (
//         <AddressContext.Provider value={{ addresses, addAddress, removeAddress, updateAddress }}>
//             {props.children}
//         </AddressContext.Provider>
//     );
// }
