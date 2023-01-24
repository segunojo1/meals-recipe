import Favourites from "./components/Favourites"
import Meals from "./components/Meals"
import Modal from "./components/Modal"
import Search from "./components/Search"
function App() {
  return(
    <div className="w-fit m-auto">
      <Search />
      <Favourites />
      <Meals />
      <Modal />
    </div>
  )
}

export default App
