// import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Login from "./Components/Login";



import { BrowserRouter, Routes, Route } from "react-router-dom";


function Router(){
    return(
        <div>
          <BrowserRouter>
          {/* <Header/> */}
          <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
          </Routes>
          </BrowserRouter>  
        </div>
    )
}

export default Router;