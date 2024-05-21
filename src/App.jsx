import { Route, Routes } from "react-router-dom"
import Home from "./home"
import Navigation from "./navigation"
import Cr from "./pages/conditional-rendering/conditional-rendering.jsx"
import Rl from "./pages/render-lists/render-lists.jsx"
import Ush from "./pages/useState/useStateHook.jsx"
import Eh from "./pages/onChange/onChange.jsx"
function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="conditional-rendering" element={<Cr renderThis={true} />}/>
        <Route path="render-lists" element={<Rl />}/>
        <Route path="useStateHook" element={<Ush />}/>
        <Route path="eventHandling" element={<Eh />}/>
      </Routes>
    </>
  )
}

export default App
