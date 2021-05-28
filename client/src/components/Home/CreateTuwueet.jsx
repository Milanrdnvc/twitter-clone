import imageIcon from '../../pictures/image.svg';
import UserContext from '../../context/UserContext';
import Tuwueet from '../shared components/Tuwueet';
import { useState, useRef, useContext, useEffect } from 'react';
import {
  getAuthToken,
  validateToken,
  POST,
  uploadImage,
  addSocketListener,
} from '../../helpers';
import {
  CreateTuwueetWrapper,
  CreateTuwueetTextInput,
  CreateTuwueetPfp,
  CreateTuwueetOptions,
  CreateTuwueetForm,
  CreateTuwueetImgPreview,
  TuwueetBtn,
} from '../styled/HomeStyles';

function CreateTuwueet({ loadTuwueets, loggedIn, setTuwueets }) {
  const [text, setText] = useState('');
  const [encodedImg, setEncodedImg] = useState(null);
  const { userData, profilePicture, socket } = useContext(UserContext);
  const textInput = useRef(null);

  function emitTuwueet(tuwueet) {
    socket.emit('tuwueet', {
      tuwueet,
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

  async function postTuwueet(e) {
    e.preventDefault();
    e.target.reset();
    const img = encodedImg;
    const tuwueetText = text;
    setEncodedImg(null);
    setText('');
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    let uploadedImg;
    if (encodedImg) uploadedImg = (await uploadImage(img, token)).data.url;
    const tuwueet = {
      text: tuwueetText,
      img: uploadedImg,
      username: userData.user.username,
      pfp: profilePicture,
    };
    const tuwueetRes = await POST('tuwueets/create', tuwueet, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': token,
      },
    });
    emitTuwueet(tuwueetRes.data.newTuwueet);
    loadTuwueets();
    textInput.current.innerText = '';
  }

  useEffect(() => {
    addSocketListener(socket, 'tuwueet', ({ tuwueet }) => {
      setTuwueets(prev => {
        const Tuwueets = prev;
        return [
          <Tuwueet
            text={tuwueet.text}
            img={tuwueet.img}
            username={tuwueet.username}
            createdAt={tuwueet.createdAt}
            id={tuwueet._id}
            likesNum={tuwueet.likes.length}
            commentsNum={tuwueet.comments.length}
            liked={false}
            pfp={tuwueet.pfp}
            userId={tuwueet.userId}
            loggedIn={true}
          />,
          ...Tuwueets,
        ];
      });
    });
  }, []);

  if (!loggedIn) return null;

  return (
    <CreateTuwueetWrapper>
      <CreateTuwueetPfp src={profilePicture} />
      <CreateTuwueetForm onSubmit={postTuwueet}>
        <CreateTuwueetTextInput
          contentEditable="true"
          onBlur={e => setText(e.target.innerText.trim())}
          onFocus={e => setText(e.target.innerText.trim())}
          onChange={e => setText(e.target.innerText.trim())}
          onKeyDown={e => setText(e.target.innerText.trim())}
          onKeyUp={e => setText(e.target.innerText.trim())}
          onPaste={e => setText(e.target.innerText.trim())}
          ref={textInput}
          // We could also use pre-built react-contenteditable component
        />
        {encodedImg && (
          <CreateTuwueetImgPreview>
            <img src={encodedImg} alt="test" width="100%" />
            <span onClick={() => setEncodedImg(null)}>&times;</span>
          </CreateTuwueetImgPreview>
        )}
        <CreateTuwueetOptions>
          <img src={imageIcon} alt="Image icon" width="30px" />
          <input type="file" onChange={handleFileInputChange} />
          <TuwueetBtn type="submit">Tuwueet</TuwueetBtn>
        </CreateTuwueetOptions>
      </CreateTuwueetForm>
    </CreateTuwueetWrapper>
  );
}

export default CreateTuwueet;
