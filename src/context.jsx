import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";

const AppContext = createContext();

    const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=n';
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const ContextProvider = ({children}) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const fetchMeals = async (url) => {
        setLoading(true)
        try{
            const {data} = await axios(url)
            setMeals(data.meals)
            console.log(data);
           
        }catch{
            console.log('err err, aliens attacked');
        }
        setLoading(false)
    }
    useEffect(()=> {
        console.log('fetch data here');
        fetchMeals(allMealsUrl)
    }, [])
    return <AppContext.Provider value={{meals, loading}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, ContextProvider}