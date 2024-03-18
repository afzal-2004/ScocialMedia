/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useContext, useRef } from "react";
import { PostList } from "../Store/post-listStore";
import { useNavigate } from "react-router-dom";
export const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const navigate = useNavigate();
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
    // console.log(`This is reaction in on sumbit function ${PostReaction}`);

    const PostTags = PostTagsElement.current.value.split(" ");
    userIdElement.current.value = "";
    PostTitleElement.current.value = "";
    PostBodyElement.current.value = "";
    PostReactionElement.current.value = "";
    PostTagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: PostTitle,
        body: PostBody,
        reactions: PostReaction,
        userId: userId,
        tags: PostTags,
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        console.log(post.reactions);
        addPost(post);
      });
    navigate("/");
  };

  return (
    <>
      <form className=" m-5 text-sm sm:text-xl " onSubmit={HandleSubmit}>
        <div className=" ">
          <label htmlFor="Title" className=" text-sm sm:text-xl">
            UserId
          </label>
          <input
            type="text"
            id="UserId"
            ref={userIdElement}
            className="shadow-sm bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light m-5 w-[90%]"
            placeholder="Usee-13"
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
            className="shadow-sm bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light m-5  w-[90%]"
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
            className="shadow-sm bg-gray-500 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 
            text-black dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-[90%] m-5"
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
            className="shadow-sm bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light m-5 w-[90%]"
          />
        </div>
        <div className=" ">
          <label htmlFor="Tags" className=" ">
            Reaction
          </label>
          <input
            type="text"
            ref={PostReactionElement}
            placeholder="How many reacted here "
            className="shadow-sm bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light m-5 w-[90%] "
          />
        </div>
        <center>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800   "
          >
            Create New Post
          </button>
        </center>
      </form>
    </>
  );
};
