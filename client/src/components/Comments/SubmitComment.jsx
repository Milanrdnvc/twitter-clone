import imageIcon from '../../pictures/image.svg';
import UserContext from '../../context/UserContext';
import { useState, useContext, useRef } from 'react';
import {
  SubmitCommentWrapper,
  SubmitCommentForm,
  SubmitCommentOptions,
  SubmitCommentImagePreview,
} from '../styled/CommentsStyles';
import { POST, getAuthToken, validateToken } from '../../helpers';

function SubmitComment({ tuwueetId, renderComments }) {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const { userData, profilePicture } = useContext(UserContext);
  const commentInput = useRef(null);

  function handleFileInputChange(e) {
    const file = e.target.files[0];
    previewFile(file);
  }

  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  }

  async function postComment(e) {
    e.preventDefault();
    e.target.reset();
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const createdAt = new Date();
    const comments = await POST(
      '/tuwueets/comment',
      {
        text,
        img,
        username: userData.user.username,
        tuwueetId,
        createdAt,
        userImg: profilePicture,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Auth-Token': token,
        },
      }
    );
    const tuwueet = (
      await POST(
        '/tuwueets/',
        {
          id: tuwueetId,
        },
        {
          headers: {
            'X-Auth-Token': token,
          },
        }
      )
    ).data.tuwueet;
    setImg(null);
    setText('');
    renderComments(comments.data, token);
    commentInput.current.innerText = '';
    if (tuwueet.userId !== userData.user.id)
      sendCommentNotification(tuwueet, token);
  }

  async function sendCommentNotification(tuwueet, token) {
    await POST(
      '/users/sendNotification',
      {
        type: 'comment',
        tuwueetId,
        username: userData.user.username,
        userId: tuwueet.userId,
      },
      {
        headers: {
          'X-Auth-Token': token,
        },
      }
    );
  }

  return (
    <SubmitCommentWrapper>
      <SubmitCommentForm onSubmit={postComment}>
        <SubmitCommentOptions>
          <div
            ref={commentInput}
            contentEditable="true"
            onBlur={e => setText(e.target.innerText.trim())}
            onFocus={e => setText(e.target.innerText.trim())}
            onChange={e => setText(e.target.innerText.trim())}
            onKeyDown={e => setText(e.target.innerText.trim())}
            onKeyUp={e => setText(e.target.innerText.trim())}
            onPaste={e => setText(e.target.innerText.trim())}
          />
          <input type="file" onChange={handleFileInputChange} />
          <img src={imageIcon} alt="Picture icon" width="30px" />
        </SubmitCommentOptions>
        <button type="submit">Submit</button>
      </SubmitCommentForm>
      {img && (
        <SubmitCommentImagePreview>
          <img src={img} alt="" width="100%" />
          <span onClick={() => setImg(null)}>&times;</span>
        </SubmitCommentImagePreview>
      )}
    </SubmitCommentWrapper>
  );
}

export default SubmitComment;
