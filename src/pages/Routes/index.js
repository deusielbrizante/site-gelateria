import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../home"
import About from "../about"
import Flavors from "../flavors"

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/flavors" element={<Flavors/>}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas