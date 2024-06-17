import React from 'react'
import Navbar1 from './components/Navbar1.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Mission from './pages/Mission.jsx';
import FurryFriends from './pages/FurryFriends.jsx';
import Foster from './pages/Foster.jsx';
import Volunteer from './pages/Volunteer.jsx';
import Donate from './pages/Donate.jsx';
import ContactUs from './pages/ContactUs.jsx';

function App() {
  return (
    // <div className='w-full h-screen text-black m-0 p-0 font-sans box-border'>
    //     <Navbar1 />
    

    // </div>
    // <>
    //   <BrowserRouter>
    //     <Navbar1 />
    //     <Routes>
    //       <Route index element={<Homepage />} />
    //       <Route path="/about" element={<Aboutpage />} />
    //       <Route path="/portfolio" element={<Portfolio />} />
    //       <Route path="/feedback" element={<Feedback />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="*" element={<NoPage />} />
    //     </Routes>
    //   </BrowserRouter>
    // </>
    <div className="h-full w-full">

      <BrowserRouter>
        <Navbar1 />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/foster" element={<Foster />} />
          <Route path="/furryfriends" element={<FurryFriends />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/volunteer" element={<Volunteer />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App