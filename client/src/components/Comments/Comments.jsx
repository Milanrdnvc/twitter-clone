import CommentsTuwueet from './CommentsTuwueet';
import Tuwueet from '../shared components/Tuwueet';
import SubmitComment from './SubmitComment';
import Comment from './Comment';
import { CommentsHeader, CommentsWrapper } from '../styled/CommentsStyles';

function Comments() {
  return (
    <CommentsWrapper>
      <CommentsHeader>Comments</CommentsHeader>
      <Tuwueet />
      <SubmitComment />
      <Comment />
    </CommentsWrapper>
  );
}

export default Comments;
