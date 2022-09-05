import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useFetchApi from '../../hooks/useFetchApi';
import { API_POSTS_URL } from '../../constants/api';
import { PostResponseType } from '../../types/post';
import Post from './post/Post';

import styles from './Posts.module.css';


export default function Posts(){
  const { data } = useFetchApi<PostResponseType>(API_POSTS_URL);

  // console.log('data', data);

  return (
    <div className={styles.container}>
      {data?.map(({userId, ...post}) => (
        <Post key={post.id} {...post}/>
      ))}
    </div>
  )
};