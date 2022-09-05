import  Head  from "next/head";
import { useRouter } from "next/router";
import { API_POST_URL } from "../../constants/api";
import useFetchApi from "../../hooks/useFetchApi";
import { IPost } from "../../types/post";
import Post from "../posts/post/Post";
import Comments from "./comments/Comments";

import styles from './PostView.module.css';


export default function PostView(){
  const router = useRouter();
  const {postId} = router.query;

  const url = API_POST_URL.replace(':postId', postId as string);

  const { data } = useFetchApi<IPost>(url);

  if(!data){
    return null;
  }

  
  return (
    <>
    <Head>
        <title>Placeholder Users Post {data.id}</title>
      </Head>
      <div className={styles.container}>
        <Post title={data.title} body={data.body}/>

        <Comments postId = {postId as string}/>
      </div>
    
    </>
  )
}