import { Typography } from "@mui/material";
import { API_POST_COMMENTS_URL } from "../../../constants/api";
import useFetchApi from "../../../hooks/useFetchApi";
import { CommentsResponseType } from "../../../types/comments";
import Comment from './comment/Comment';

import styles from './Comments.module.css';

type CommentsProps = {
  readonly postId: string;
}

export default function Comments(props: CommentsProps) {
  const { postId } = props;

  const url = API_POST_COMMENTS_URL.replace(':postId', postId);

  const { data } = useFetchApi<CommentsResponseType>(url);

  // console.log('data: ', data);

  if(!data){
    return null;
  }


  return (
    <div className={styles.container}>
      <Typography variant="h4" >Comments</Typography>

      <div className={styles.list}>
        {data.map(( {id, postId: _, ...comment} ) => (
          <Comment key={id} {...comment}/>
        ))}
      </div>
    </div>
  )
}