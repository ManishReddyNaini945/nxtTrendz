import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Notfound from "./components/Notfound";
const App=()=>{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<Notfound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App