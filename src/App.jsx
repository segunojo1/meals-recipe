import Favourites from "./components/Favourites"
import Meals from "./components/Meals"
import Modal from "./components/Modal"
import Search from "./components/Search"
import { useGlobalContext } from "./context"
function App() {
  const {showModal} = useGlobalContext()
  return(
    <div >
      <Search />
      <div className="w-fit m-auto">
      <Favourites />
      <Meals />
      </div>
     {showModal && <Modal />}
    </div>
  )
}

export default App
