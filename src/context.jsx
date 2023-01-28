import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";

const AppContext = createContext();

const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const ContextProvider = ({children}) => {
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(true)
    const showw = () => {
        setShowModal(prev => !prev)
    }
    const getRandom = () => {
        fetchMeals(randomMealUrl)
        
    }
    const fetchMeals = async (url) => {
        setLoading(true)
        try{
            const {data} = await axios(url)
            if(data.meals) {
                setMeals(data.meals)
            }else{
                setMeals([])
            }
            console.log(data);
           
        }catch{
            console.log('err err, aliens attacked');
        }
        setLoading(false)
    }
    useEffect(()=> {
        console.log('fetch data here');
        fetchMeals(`${allMealsUrl}${search}`)
    }, [search])
    return <AppContext.Provider value={{meals, loading, setSearch, getRandom, showModal, setShowModal, showw}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, ContextProvider}