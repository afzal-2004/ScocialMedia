/* eslint-disable no-unused-vars */
import { useContext, useRef } from "react";
import { PostList } from "../Store/post-listStore";

export const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const PostReactionElement = useRef();
  const PostTagsElement = useRef();
  const HandleSubmit = (event) => {
    // event.prventDefault();
    const userId = userIdElement.current.value;
    const PostTitle = PostTitleElement.current.value;
    const PostBody = PostBodyElement.current.value;
    const PostReaction = PostReactionElement.current.value;
    const PostTags = PostTagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    PostTitleElement.current.value = "";
    PostBodyElement.current.value = "";
    PostBodyElement.current.value = "";
    PostTagsElement.current.value = "";
    addPost(userId, PostTitle, PostBody, PostReaction, PostTags);
  };
  return (
    <>
      <form className="" onSubmit={HandleSubmit}>
        <div className=" ">
          <label htmlFor="Title" className="">
            UserId
          </label>
          <input
            type="text"
            id="UserId"
            ref={userIdElement}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light m-5 w-[90%]"
            placeholder="Userid"
          />
        </div>
        <div className=" w-full">
          <label htmlFor="Title" className="">
            Post-Title
          </label>
          <input
            type="text"
            id="title"
            ref={PostTitleElement}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light m-5 w-[90%]"
            placeholder="Tittle"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="text" className="">
            Post-Text
          </label>
          <textarea
            type="text"
            ref={PostBodyElement}
            placeholder="Text Releted to post ..."
            id="text"
            rows={5}
            cols={20}
            className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-[90%] m-5"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="Tags" className=" ">
            Post-Tags
          </label>
          <input
            type="text"
            ref={PostTagsElement}
            placeholder="input All taags with placeholder"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light m-5 w-[90%]"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="Tags" className=" ">
            Reaction
          </label>
          <input
            type="number"
            ref={PostReactionElement}
            placeholder="How many reacted here "
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light m-5 w-[90%] "
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
        >
          Create New Post
        </button>
      </form>
    </>
  );
};
