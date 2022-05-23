import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Responses from "./components/Responses/Responses";


function App() {
          return(
                    <div>
                              <Navbar/>
                              
                              <Routes>
                                        <Route path="/" element={<Home/>}/>
                                        <Route path ="/responses" element={<Responses/>} />
                              </Routes>

                              <Footer />
                    </div>
          )
}

export default App;

