
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { IComment } from '../../../../types/comments';

interface CommentProps extends Omit<IComment, 'id' | 'postId'>{}

export default function Comment(props: CommentProps){
  const { name, email, body } = props;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5">
          {name}
        </Typography>
        <Typography color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
    </Card>
  )
}