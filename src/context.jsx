import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios";

const AppContext = createContext();

const allMealsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'
const ContextProvider = ({children}) => {
    const [search, setSearch] = useState('')
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [selectedMeal, setSelectedMeal] = useState(null);
    const [favourites, setFavourites] = useState()
    
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
    const showw = (idMeal) => {
        let meal;
       meal =  meals.find((mel) => mel.idMeal === idMeal)
        setSelectedMeal(meal)
        setShowModal(true)
    }

    //favourites
    const addToFav = (id) => {
      const meal = meals.find((meal) => {
        meal.idMeal == id
      })
      const added = favourites.find((meal) => meal.idMeal == id)
      if(added) return 
      const newFavs = [...favourites, meal]
      setFavourites(newFavs)
    }

    const removeFav = (id) => {
        const newwFavs = favourites.filter((fav) => fav.idMeal !== id)
        setFavourites(newwFavs)
    }
    useEffect(()=> {
        console.log('fetch data here');
        fetchMeals(`${allMealsUrl}${search}`)
    }, [search])
    return <AppContext.Provider value={{meals, loading, setSearch, getRandom, showModal, setShowModal, showw, selectedMeal, addToFav, favourites, removeFav}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, ContextProvider}