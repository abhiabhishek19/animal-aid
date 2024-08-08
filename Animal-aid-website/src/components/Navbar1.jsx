import React, { useState } from "react";
import { NavLink} from 'react-router-dom';
import logoimg from "../images/logoimg.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar1 = () => {
  const [navBar, setNavbarActive] = useState(false);

  const navbarHandler = () => {
    setNavbarActive(!navBar);
  };

  const closeNavbar = () => {
    setNavbarActive(false);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-8 bg-teal-400 py-4 text-white relative">
        <div className="relative">
          <img src={logoimg} alt="" className="w-16 h-16"/>
        </div>
        <div className="relative">
          <ul className="hidden sm:flex justify-around  cursor-pointer">
            <li className="px-4"><NavLink to="/" className={({isActive})=> isActive ? "text-red-500" : "text-white" }>Home</NavLink></li>
            <li className="px-4"><NavLink to="/mission" className={({isActive})=> isActive ? "text-red-500" : "text-white" }>Mission</NavLink></li>
            <li className="px-4"><NavLink to="/furryfriends" className={({isActive})=> isActive ? "text-red-500" : "text-white" }>Furry Friends</NavLink></li>
            <li className="px-4"><NavLink to="/foster" className={({isActive})=> isActive ? "text-red-500" : "text-white" }>Foster</NavLink></li>
            <li className="px-4"><NavLink to="/volunteer" className={({isActive})=> isActive ? "text-red-500" : "text-white" }>Volunteer</NavLink></li>
            <li className="px-4"><NavLink to="/donate" className={({isActive})=> isActive ? "text-red-500" : "text-white" }>Donate</NavLink></li>
            <li className="px-4"><NavLink to="/contactus" className={({isActive})=> isActive ? "text-red-500" : "text-white" }>Contact Us</NavLink></li>
          </ul>
        </div>
        <div className="flex sm:hidden" onClick={navbarHandler}>
          {
            !navBar ? <AiOutlineMenu size={30} />  : <AiOutlineClose size={30} />
          }
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="relative">
        <ul
          className={`
          ${!navBar ? "flex flex-col justify-start items-start text-center cursor-pointer absolute left-[-100%] top-0 p-4 transition-all duration-1000 h-screen w-full" :
              "flex flex-col justify-start p-3 items-start text-center cursor-pointer absolute left-0 bg-teal-100  transition-all duration-1000 h-[90vh] w-full z-50"}`}>
          <li className="mb-2 text-lg"><NavLink to="/" onClick={closeNavbar}>Home</NavLink></li>
          <li className="mb-2 text-lg"><NavLink to="/mission" onClick={closeNavbar}>Mission</NavLink></li>
          <li className="mb-2 text-lg"><NavLink to="/furryfriends" onClick={closeNavbar}>Furry Friends</NavLink></li>
          <li className="mb-2 text-lg"><NavLink to="/foster" onClick={closeNavbar}>Foster</NavLink></li>
          <li className="mb-2 text-lg"><NavLink to="/volunteer" onClick={closeNavbar}>Volunteer</NavLink></li>
          <li className="mb-2 text-lg"><NavLink to="/donate" onClick={closeNavbar}>Donate</NavLink></li>
          <li className="text-lg"><NavLink to="/contactus" onClick={closeNavbar}>Contact Us</NavLink></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar1;