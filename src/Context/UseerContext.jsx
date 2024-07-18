import { createContext, useEffect, useState } from "react";

export let UseerContext = createContext();

export default function UseerContextProvider(props) {

    const [useerLogin, setUseerLogin] = useState(null);


    // 1111111111111111111111111111111111111
    useEffect(() => {
        if (localStorage.getItem('userToken') !== null) {
            setUseerLogin(localStorage.getItem('userToken'))
        }
    }, [])
    // 1111111111111111111111111111111111111

    return <UseerContext.Provider value={{ useerLogin, setUseerLogin }}>
        {props.children}
    </UseerContext.Provider>
}


