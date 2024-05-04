import { useState } from "react";

import "./App.css";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import HOme from "./components/HOme";
import Course from "./components/Course";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from './Context/Authprovider';
function App() {
  const [authUSer, SetAuthUser] = useAuth();
  console.log(authUSer);

  return (
    <div>
      {" "}
      <Routes>
        <Route path="/" element={<HOme />} />
        <Route path="/course" element={authUSer?<Course />:<Navigate to="/signup"/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
