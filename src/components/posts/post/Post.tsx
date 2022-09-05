import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IPost } from '../../../types/post';
import { POST_ROUTE } from '../../../constants/routes';
import { useRouter } from 'next/router';

interface PostProps extends Omit<IPost, 'id' | 'userId'>{
  readonly id?: number;
}

export default function Post(props: PostProps) {
  const { id, title, body } = props;

  const router = useRouter();

  const onSelectPost = () => {
    if(id){
      const url = POST_ROUTE.replace(':postId', id.toString());
      
      router.push(url);
    }
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {body}
        </Typography>
      </CardContent>
      {id && (
        <CardActions>
          <Button size="small" onClick={onSelectPost}>Leer más</Button>
        </CardActions>
      )
      }
    </Card>
  )
}