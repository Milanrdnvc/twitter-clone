import Tuwueet from '../shared components/Tuwueet';
import SubmitComment from './SubmitComment';
import Comment from './Comment';
import { POST, GET, getAuthToken, validateToken } from '../../helpers';
import { useState, useEffect } from 'react';
import { CommentsHeader, CommentsWrapper } from '../styled/CommentsStyles';

function Comments({
  match: {
    params: { id },
  },
}) {
  const [Comments, setComments] = useState(null);
  const [TuwueetComponent, setTuwueetComponent] = useState(null);

  async function getTuwueet(id) {
    const token = getAuthToken();
    const validToken = validateToken(token);
    if (!validToken) return;
    const tuwueet = (
      await POST(
        '/tuwueets',
        { id },
        {
          headers: {
            'X-Auth-Token': token,
          },
        }
      )
    ).data.tuwueet;
    renderTuwueet(tuwueet);
  }

  async function renderTuwueet(tuwueet) {
    const token = getAuthToken();
    const validToken = validateToken(token);
    if (!validToken) return;
    const user = await GET('/users', {
      headers: {
        'X-Auth-Token': token,
      },
    });
    const userId = user.data.id;
    const isLiked = Boolean(tuwueet.likes.find(user => user.userId === userId));
    setTuwueetComponent(
      <Tuwueet
        text={tuwueet.text}
        img={tuwueet.img}
        username={tuwueet.username}
        createdAt={tuwueet.createdAt}
        id={tuwueet._id}
        likesNum={tuwueet.likes.length}
        commentsNum={tuwueet.comments.length}
        liked={isLiked}
      />
    );
  }

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
    updateTuwueetComments(allComments.length);
    setComments(allComments.reverse());
  }

  async function updateTuwueetComments(commentsNum) {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const user = await GET('/users', {
      headers: {
        'X-Auth-Token': token,
      },
    });
    const tuwueet = (
      await POST(
        '/tuwueets',
        { id },
        {
          headers: {
            'X-Auth-Token': token,
          },
        }
      )
    ).data.tuwueet;
    const userId = user.data.id;
    const isLiked = Boolean(tuwueet.likes.find(user => user.userId === userId));
    setTuwueetComponent(
      <Tuwueet
        text={tuwueet.text}
        img={tuwueet.img}
        username={tuwueet.username}
        createdAt={tuwueet.createdAt}
        id={tuwueet._id}
        likesNum={tuwueet.likes.length}
        commentsNum={commentsNum}
        liked={isLiked}
      />
    );
  }

  async function getAllComments(tuwueetId) {
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
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
    getTuwueet(id);
  }, []);

  return (
    <CommentsWrapper>
      <CommentsHeader>Comments</CommentsHeader>
      {TuwueetComponent}
      <SubmitComment tuwueetId={id} renderComments={renderComments} />
      {Comments}
    </CommentsWrapper>
  );
}

export default Comments;
