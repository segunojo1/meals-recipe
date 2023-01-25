import Favourites from "./components/Favourites"
import Meals from "./components/Meals"
import Modal from "./components/Modal"
import Search from "./components/Search"
function App() {
  return(
    <div >
      <Search />
      <div className="w-fit m-auto">
      <Favourites />
      <Meals />
      <Modal />
      </div>
    </div>
  )
}

export default App
