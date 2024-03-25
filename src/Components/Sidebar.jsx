/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import "./Style.css";
import { NavLink } from "react-router-dom";
export const SideBar = () => {
  return (
    <>
      <aside
        className="   sm:block  sm:flex-col sm:w-64   flex flex-row  sm:h-full  sm:px-4 py-8  
        border border-red-500  w-full bg-slate-500   "
      >
        <div className=" flex  sm:flex-col  justify-evenly sm:justify-between flex-1  sm:mt-6    ">
          <nav className="  flex sm:block">
            <NavLink
              className={`flex items-center  py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400    dark:hover:text-gray-200 hover:text-gray-700  px-4`}
              to="/"
            >
              <span className="mx-4 font-medium  text-white hover:text-gray-300 text-sm">
                Home
              </span>
            </NavLink>

            <NavLink
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400  
              :hover:text-gray-200 hover:text-gray-700 `}
              to="/CreatePost"
            >
              <span className="mx-4 font-medium  text-white  hover:text-gray-300 text-sm">
                CreatePost{" "}
              </span>
            </NavLink>
          </nav>
        </div>
      </aside>
    </>
  );
};
