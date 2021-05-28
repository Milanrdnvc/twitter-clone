import imageIcon from '../../pictures/image.svg';
import UserContext from '../../context/UserContext';
import Comment from '../Comments/Comment';
import { useState, useContext, useRef, useEffect } from 'react';
import {
  SubmitCommentWrapper,
  SubmitCommentForm,
  SubmitCommentOptions,
  SubmitCommentImagePreview,
} from '../styled/CommentsStyles';
import {
  POST,
  getAuthToken,
  validateToken,
  uploadImage,
  addSocketListener,
} from '../../helpers';

function SubmitComment({ tuwueetId, renderComments, setComments }) {
  const [text, setText] = useState('');
  const [encodedImg, setEncodedImg] = useState(null);
  const { userData, profilePicture, socket } = useContext(UserContext);
  const commentInput = useRef(null);

  function emitComment(comment) {
    socket.emit('comment', {
      comment,
    });
  }

  function handleFileInputChange(e) {
    const file = e.target.files[0];
    previewFile(file);
  }

  function previewFile(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setEncodedImg(reader.result);
    };
  }

  async function postComment(e) {
    e.preventDefault();
    e.target.reset();
    const img = encodedImg;
    const tuwueetText = text;
    setEncodedImg(null);
    setText('');
    commentInput.current.innerText = '';
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    const createdAt = new Date();
    let uploadedImg;
    if (encodedImg) uploadedImg = (await uploadImage(img, token)).data.url;
    const comment = {
      text: tuwueetText,
      img: uploadedImg || 'no img',
      username: userData.user.username,
      tuwueetId,
      createdAt,
      userImg: profilePicture,
    };
    const comments = await POST('/tuwueets/comment', comment, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': token,
      },
    });
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
    emitComment(comment);
    renderComments(comments.data, token);
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

  useEffect(() => {
    addSocketListener(socket, 'comment', ({ comment }) => {
      setComments(prev => {
        const Comments = prev;
        return [
          <Comment
            username={comment.username}
            img={comment.img}
            createdAt={comment.createdAt}
            text={comment.text}
            userPfp={comment.userImg}
          />,
          ...Comments,
        ];
      });
    });
  }, []);

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
      {encodedImg && (
        <SubmitCommentImagePreview>
          <img src={encodedImg} alt="" width="100%" />
          <span onClick={() => setEncodedImg(null)}>&times;</span>
        </SubmitCommentImagePreview>
      )}
    </SubmitCommentWrapper>
  );
}

export default SubmitComment;
