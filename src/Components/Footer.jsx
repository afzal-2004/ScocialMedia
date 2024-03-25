export const Footer = () => {
  return (
    <>
      <footer className=" rounded-lg shadow   p-3  text-black">
        <div className="w-full  mx-auto ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium justify-around">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};
