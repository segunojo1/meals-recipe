import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";

const AppContext = createContext();

    const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a';
    const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const ContextProvider = ({children}) => {
    const [meals, setMeals] = useState([]);
    const fetchMeals = async (url) => {
        try{
            const {data} = await axios(url)
            setMeals(data.meals)
            console.log(data);
        }catch{
            console.log('err err, aliens attacked');
        }
    }
    useEffect(()=> {
        console.log('fetch data here');
        fetchMeals(allMealsUrl)
    }, [])
    return <AppContext.Provider value={{meals}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, ContextProvider}