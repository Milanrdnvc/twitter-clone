import Tuwueet from '../shared components/Tuwueet';
import SubmitComment from './SubmitComment';
import Comment from './Comment';
import { useState } from 'react';
import { CommentsHeader, CommentsWrapper } from '../styled/CommentsStyles';

function Comments({
  match: {
    params: { id },
  },
}) {
  const [Comments, setComments] = useState(null);

  function renderComments(comments) {
    const allComments = comments.comments.map((comment, idx) => {
      return (
        <Comment
          username={comment.createdBy}
          img={comment.img}
          createdAt={comment.createdAt}
          text={comment.text}
          userPfp={comment.userImg}
          key={idx}
        />
      );
    });
    setComments(allComments.reverse());
  }
  return (
    <CommentsWrapper>
      <CommentsHeader>Comments</CommentsHeader>
      <Tuwueet />
      <SubmitComment tuwueetId={id} renderComments={renderComments} />
      {Comments}
    </CommentsWrapper>
  );
}

export default Comments;
