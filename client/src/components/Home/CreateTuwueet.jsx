import imageIcon from '../../pictures/image.svg';
import UserContext from '../../context/UserContext';
import io from 'socket.io-client';
import { useState, useRef, useContext, useEffect } from 'react';
import { getAuthToken, validateToken, POST, uploadImage } from '../../helpers';
import {
  CreateTuwueetWrapper,
  CreateTuwueetTextInput,
  CreateTuwueetPfp,
  CreateTuwueetOptions,
  CreateTuwueetForm,
  CreateTuwueetImgPreview,
  TuwueetBtn,
} from '../styled/HomeStyles';

const socket = io('http://localhost:5000', { transports: ['websocket'] });

function CreateTuwueet({ loadTuwueets, loggedIn }) {
  const [text, setText] = useState('');
  const [encodedImg, setEncodedImg] = useState(null);
  const textInput = useRef(null);
  const { userData, profilePicture } = useContext(UserContext);

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
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (!validToken) return;
    let uploadedImg;
    if (encodedImg)
      uploadedImg = (await uploadImage(encodedImg, token)).data.url;
    const tuwueet = {
      text,
      img: uploadedImg,
      username: userData.user.username,
      pfp: profilePicture,
    };
    emitTuwueet(tuwueet);
    await POST('tuwueets/create', tuwueet, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': token,
      },
    });
    setEncodedImg(null);
    setText('');
    loadTuwueets();
    textInput.current.innerText = '';
  }

  useEffect(() => {
    socket.on('tuwueet', tuwueet => {
      console.log(tuwueet);
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
