import { createContext, useContext, useEffect } from "react"

const AppContext = createContext();

const ContextProvider = ({children}) => {
    useEffect(()=> {
        console.log('fetch data here');
        const fetchfunc = async () => {
            try{
                const res = await fetch('https://randomuser.me/api')
                const out = await res.json() 
                console.log(out);
            }catch{
                console.log('err err, aliens attacked');
            }
        }
        fetchfunc()
    }, [])
    return <AppContext.Provider value={{name: 'Segun', age: 15}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, ContextProvider}