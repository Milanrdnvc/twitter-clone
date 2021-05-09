import Tuwueet from '../shared components/Tuwueet';
import SubmitComment from './SubmitComment';
import Comment from './Comment';
import { POST, getAuthToken, validateToken } from '../../helpers';
import { useState, useEffect } from 'react';
import { CommentsHeader, CommentsWrapper } from '../styled/CommentsStyles';

function Comments({
  match: {
    params: { id },
  },
}) {
  const [Comments, setComments] = useState(null);

  function renderComments(comments) {
    console.log(comments);
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

  async function getAllComments(tuwueetId) {
    const token = getAuthToken();
    const validToken = validateToken(token);
    if (!validToken) return;
    const comments = await POST(
      '/tuwueets/allComments',
      { tuwueetId },
      {
        headers: {
          'X-Auth-Token': token,
        },
      }
    );
    return comments.data;
  }

  useEffect(() => {
    getAllComments(id)
      .then(res => renderComments(res))
      .catch(err => console.error(err));
  }, []);

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
