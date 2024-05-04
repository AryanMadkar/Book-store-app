import { useState } from "react";

import "./App.css";
import About from "../src/components/About"
import Contact from "../src/components/Contact";
import HOme from "./components/HOme";
import Course from "./components/Course";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (

     <Routes>
       <Route path="/" element={<HOme/>} />
       <Route path="/course" element={<Course/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/signup" element={<Signup/>} />
     </Routes>
  );
}

export default App;
