import { NextPage } from "next"
import Head from 'next/head'
import { useRouter } from "next/router";
import Header from "../../src/components/header/Header";
import PostView from "../../src/components/post-view/PostView";
import Post from "../../src/components/posts/post/Post";
import { API_POST_URL } from "../../src/constants/api";
import useFetchApi from "../../src/hooks/useFetchApi";
import { IPost } from "../../src/types/post";

const PostPage: NextPage = () => {
  const router = useRouter();
  const {postId} = router.query;

  const url = API_POST_URL.replace(':postId', postId as string);

  const { data } = useFetchApi<IPost>(url);

  console.log('data: ', data);

  if(!data){
    return null;
  }

  return (
    <>
      <Header />
      <PostView />
    </>
  )
}

export default PostPage;