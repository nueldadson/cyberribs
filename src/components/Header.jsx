/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";  
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import Buttons from "./Buttons";
import { logo } from "../assets/images";
import { navBarList } from "../constants";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();
  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 714) {
        setShowMenu(false);
      } else {   
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50">
      <nav className="h-full px-8 w-full mx-auto relative">
        <div className="flex items-center h-full w-full gap-8 max-[826px]:justify-between max-[826px]:gap-0 ">
          <Link to="/"> 
            <div>
              <div className="w-[128px] object-cover">
                <img src={logo} alt="CyberRibsLogo" srcset="" />
              </div>
            </div>
          </Link>
          <div className="flex w-full max-[826px]:w-fit">
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-full justify-between z-50 p-0 gap-2 max-[714px]:hidden inline-block"
              >
                <>
                    <div className="flex flex-row">
                        {navBarList.map(({ _id, title, link }) => (
                            <NavLink
                            key={_id}
                            className="flex font-semibold hover:font-extrabold w-[fit-content] h-6 justify-center items-center px-3 text-base text-black hover:underline underline-offset-[4px] hover:text-[#c084fc] hoverEffect last:border-r-0"
                            to={link}
                            state={{ data: location.pathname.split("/")[1] }}
                            >
                              <li>{title}</li>
                            </NavLink>
                        ))}
                    </div>
                    <div className="flex flex-row gap-6">
                        <Buttons text='Login' className='text-white border-purple-400 bg-purple-400  max-[826px]:hidden' />
                        <Buttons text='SignUp' className='text-black border-black max-[960px]:hidden' />
                    </div>
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="max-[714px]:inline-block hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full sidebarbackground p-6">
                    <img
                      className="w-28 mb-6"
                      src={logo}
                      alt="logoLight"
                    />
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navBarList.map((item) => (
                        <li
                          className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#c084fc] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                          key={item._id}
                        >
                          <NavLink
                            to={item.link}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
