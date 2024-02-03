/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
// // eslint-disable-next-line no-unused-vars
import { Post } from "./Post";
import { useContext } from "react";
// // eslint-disable-next-line no-unused-vars
import { PostList as PostListData } from "../Store/post-listStore";

export const PostList = () => {
  const { postlist } = useContext(PostListData);

  return (
    <>
      {" "}
      <div className=" grid grid-cols-2  ">
        {postlist.map((post) => (
          <Post key={post.id} post={post} id={post.id} />
        ))}
      </div>
    </>
  );
};
