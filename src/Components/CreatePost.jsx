/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "./Style.css";
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

    const PostTags = PostTagsElement.current.value.split("#");
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
    window.scrollTo(0, 0);
  };

  return (
    <>
      <form
        className=" m-5 text-sm sm:text-xl text-black  "
        onSubmit={HandleSubmit}
      >
        <div className="">
          <label htmlFor="floating_email" className="">
            User id
          </label>
          <input
            type="text"
            id="UserId"
            ref={userIdElement}
            className=" Input "
            placeholder="0-100"
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
            className="Input "
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
            rows={3}
            cols={20}
            className="Input "
          />
        </div>
        <div className="mb-5">
          <label htmlFor="Tags" className=" ">
            Post-Tags
          </label>
          <input
            type="text"
            ref={PostTagsElement}
            placeholder="input All taags with  # symbol"
            className="Input "
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
            className="Input "
          />
        </div>
        <center>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  mt-[5%]  "
          >
            Create New Post
          </button>
        </center>
      </form>
    </>
  );
};
