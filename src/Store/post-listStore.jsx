/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useState, useEffect } from "react";

export const PostList = createContext({
  postlist: [],
  Fetchdata: false,
  addPost: () => {},
  DeletePost: () => {},
});
const postListReducer = (CurrPostList, action) => {
  let newpostList = CurrPostList;
  if (action.type === "DELETE_POST") {
    newpostList = CurrPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POST") {
    newpostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newpostList = [action.payload, ...CurrPostList];
  }

  return newpostList;
};

const PostlistProvider = ({ children }) => {
  const [Fetchdata, setFetchdata] = useState(false);

  const addPost = (post) => {
    console.log("Add List post call");
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };
  const addIneteialPost = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    });
  };

  const DeletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postlist, dispatchPostList] = useReducer(postListReducer, []);
  useEffect(() => {
    setFetchdata(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addIneteialPost(data.posts);
        setFetchdata(false);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <PostList.Provider
        value={{
          postlist,
          addPost,
          Fetchdata,
          DeletePost,
        }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};

export default PostlistProvider;
