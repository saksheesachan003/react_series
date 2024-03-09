import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  // const [dataFetched, setDataFetched] = useState(false);

  //handling Loading State...
  const [fetching, setFetching] = useState(false);

  // we can use useEffect for data fetching from server also don't need state...
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        //addInitialPosts([]);
        setFetching(false);
      });

    //useEffect cleanup method...
    return () => {
      console.log("Cleaning up useEffect.");
    };
  }, []);

  /* if dataFetched state is false then data fetch from server...
  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetched(true);
  } */

  /* After click on button data will come from server..
  const handleGetPostsClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
   // console.log("Get posts clicked...");
  }; */

  /*  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage
        // onGetPostsClick={handleGetPostsClick}
        />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  ); */
  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};

export default PostList;
