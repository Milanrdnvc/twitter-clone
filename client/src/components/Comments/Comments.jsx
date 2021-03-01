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
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </CommentsWrapper>
  );
}

export default Comments;
