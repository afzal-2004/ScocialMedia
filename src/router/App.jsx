/* eslint-disable no-unused-vars */
// import { Header } from "../Components/Header";
import { CreatePost } from "../Components/CreatePost";
import { SideBar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";
import { PostList } from "../Components/PostList";
import { useState } from "react";
import PostlistProvider from "../Store/post-listStore";
import { Outlet } from "react-router-dom";
function App() {
  const [CurrentState, setCurrentState] = useState("Home");
  return (
    <>
      <PostlistProvider>
        <div className="   text-white   text-2xl bg-slate-900">
          {" "}
          <div className="  sm:flex">
            <SideBar
              currrentState={CurrentState}
              setCurrentState={setCurrentState}
            />
            <div className=" border border-blue-300 w-[100%]">
              {/* <Header /> */}
              <Outlet />
              <Footer />
            </div>
          </div>
        </div>
      </PostlistProvider>
    </>
  );
}

export default App;
