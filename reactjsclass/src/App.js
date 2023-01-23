import Home from "./components/Home";
import Gallery from "./components/Gallery";
import GetBook from "./components/GetBook";
import NoPage from "./components/NoPage";

import {BrowserRouter, Routes, Route} from "react-router-dom"


const App = ()=>{
  return(
    <BrowserRouter>
    <Routes>

      <Route index element={<Home/>} />
      <Route path="GetBook" element={<GetBook/>} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="*" element={<NoPage />}  />

    </Routes>
    
    </BrowserRouter>
  )
}

export default App;