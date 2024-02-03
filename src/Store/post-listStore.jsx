/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  DeletePost: () => {},
});
const postListReducer = (CurrPostList, action) => {
  let newpostList = CurrPostList;
  if (action.type === "DELETE_POST") {
    newpostList = CurrPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newpostList = [action.payload, ...CurrPostList];
  }
  return newpostList;
};

const PostlistProvider = ({ children }) => {
  const addPost = (userId, PostTitle, PostBody, PostReaction, PostTags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: PostTitle,
        body: PostBody,
        reaction: PostReaction,
        userId: userId,
        tags: PostTags,
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

  const [postlist, dispatchPostList] = useReducer(
    postListReducer,

    DefaultPost_list
  );

  return (
    <>
      <PostList.Provider
        value={{
          postlist,
          addPost,
          DeletePost,
        }}
      >
        {children}
      </PostList.Provider>
    </>
  );
};
export default PostlistProvider;
const DefaultPost_list = [
  {
    id: "1",
    title: "lorem",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, perspiciatis ",
    reaction: 2,
    userId: "#rizvi",
    tags: ["#lorem", "#Ipsum"],
  },
];
