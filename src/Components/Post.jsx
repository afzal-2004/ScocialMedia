/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../Store/post-listStore";

// eslint-disable-next-line no-unused-vars
export const Post = ({ post }) => {
  const { DeletePost } = useContext(PostList);
  return (
    <>
      <div className=" bg-slate-200 rounded-xl  shadow-md  mx-[1%]  my-[2%] p-4  ">
        <div className=" w-[100%]       justify-center">
          <div className="p-2 relative">
            <div
              className="uppercase tracking-wide text-sm text-white bg-red-800  w-[35px]  h-[20px] flex  justify-center items-center  rounded-full  absolute top-0 right-0  z-10"
              onClick={() => DeletePost(post.id)}
            >
              <MdDelete />
            </div>
            <h2 className="mt-2 text-gray-900  sm:text-2xl font-bold leading-tight   text-xl  ">
              {post.title}
            </h2>
            <p className="mt-2 text-gray-600 text-sm sm:text-xl ">
              {post.body}
            </p>
          </div>
        </div>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className=" text-sm bg-blue-700 text-white px-2 py-1 rounded-xl  m-2  "
          >
            {tag}
          </span>
        ))}
        <p className="  bg-slate-100 shadow-lg  p-2 m-5   rounded-2xl  text-red-400  sm:text-base text-sm font-semibold ">
          {" "}
          Reaction-{post.reactions}
        </p>
      </div>
    </>
  );
};
