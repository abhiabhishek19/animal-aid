import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logoimg from "../images/logoimg.png"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar1 = () => {
  const [navBar, setNavbarActive] = useState(false);

  const navbarHandler = () => {
    setNavbarActive(!navBar);
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center px-8 bg-teal-400 py-4 text-white relative">
        <div className="relative">
          <img src={logoimg} alt="" className="w-16 h-16"/>
        </div>
        <div className="relative">
          <ul className="hidden sm:flex justify-around  cursor-pointer">
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/mission">Mission</Link></li>
            <li className="px-4"><Link to="/furryfriends">Furry Friends</Link></li>
            <li className="px-4"><Link to="/foster">Foster</Link></li>
            <li className="px-4"><Link to="/volunteer">Volunteer</Link></li>
            <li className="px-4"><Link to="/donate">Donate</Link></li>
            <li className="px-4"><Link to="/contactus">Contact Us</Link></li>
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
              "flex flex-col justify-start p-3 items-start text-center cursor-pointer absolute left-0 bg-teal-100  transition-all duration-1000 h-[90vh] w-full"}`}>
          <li className="mb-2 text-lg">Home</li>
          <li className="mb-2 text-lg">Mission</li>
          <li className="mb-2 text-lg">Furry Friends</li>
          <li className="mb-2 text-lg">Foster</li>
          <li className="mb-2 text-lg">Volunteer</li>
          <li className="mb-2 text-lg">Donate</li>
          <li className="text-lg">Contact us</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar1;