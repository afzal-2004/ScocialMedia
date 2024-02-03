/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
import "./Style.css";
export const SideBar = ({ currrentState, setCurrentState }) => {
  return (
    <>
      <aside className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <div className="relative mt-6">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            placeholder="Search"
          />
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <a
              className={`flex items-center  py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400    dark:hover:text-gray-200 hover:text-gray-700  px-4 ${
                currrentState === "Home" && "active"
              }`}
              href="#"
            >
              <span
                className="mx-4 font-medium  text-white hover:text-gray-300"
                onClick={() => {
                  console.log("createPost ");
                  setCurrentState("Home");
                }}
              >
                Home
              </span>
            </a>

            <a
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400  
              :hover:text-gray-200 hover:text-gray-700  ${
                currrentState === "CretePost" && "active"
              }`}
              href="#"
            >
              <span
                className="mx-4 font-medium  text-white  hover:text-gray-300"
                onClick={() => {
                  console.log("createPost ");
                  setCurrentState("CretePost");
                }}
              >
                CreatePost{" "}
              </span>
            </a>
          </nav>
        </div>
      </aside>
    </>
  );
};
