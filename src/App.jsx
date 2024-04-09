import React from "react"
import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import Profile from "./pages/Profile.jsx"
import Navbar from "./components/Navbar.jsx"


const App = () => {
  return(
    <React.Fragment>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </React.Fragment>
    )
}

export default App