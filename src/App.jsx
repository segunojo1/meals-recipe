import Favourites from "./components/Favourites"
import Meals from "./components/Meals"
import Modal from "./components/Modal"
import Search from "./components/Search"
import { useGlobalContext } from "./context"
function App() {
  const {showModal, favourites} = useGlobalContext()
  return(
    <div >
      <Search />
      {favourites.length >= 1 && <Favourites />}
      <div className="w-fit m-auto">
      <Meals />
      </div>
     {showModal && <Modal />}
    </div>
  )
}

export default App
