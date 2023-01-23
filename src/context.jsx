import { createContext, useContext, useEffect } from "react"

const AppContext = createContext();

    const allMeasUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const ContextProvider = ({children}) => {
    const fetchfunc = async () => {
        try{
            const res = await fetch('https://randomuser.me/api')
            const out = await res.json() 
            console.log(out);
        }catch{
            console.log('err err, aliens attacked');
        }
    }
    useEffect(()=> {
        console.log('fetch data here');
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