import { Post } from "./Post";
import { useContext } from "react";
// // eslint-disable-next-line no-unused-vars
import { PostList as PostListData } from "../Store/post-listStore";
import { WelcomeMessage } from "./WelcomeMessage";
import { LoadddingSppiner } from "./LoodingSppiner";
// import Fetchdata
export const PostList = () => {
  const { postlist, Fetchdata } = useContext(PostListData);

  return (
    <>
      {Fetchdata && <LoadddingSppiner />}
      {!Fetchdata && postlist.length === 0 && <WelcomeMessage />}{" "}
      <div className=" grid grid-cols-1  ">
        {!Fetchdata &&
          postlist.map((post) => (
            <Post key={post.id} post={post} id={post.id} />
          ))}
      </div>
    </>
  );
};
