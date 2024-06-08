import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"

const App = () => {
  return (
    <>
    <div className="p-2">
      <Routes>
        <Route path='/' element={<Home/>} />

      </Routes>
    </div>

    </>
  )
}
export default App