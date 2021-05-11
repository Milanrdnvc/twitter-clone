import imageIcon from '../../pictures/image.svg';
import UserContext from '../../context/UserContext';
import { useState, useRef, useContext } from 'react';
import { getAuthToken, validateToken, POST } from '../../helpers';
import {
  CreateTuwueetWrapper,
  CreateTuwueetTextInput,
  CreateTuwueetPfp,
  CreateTuwueetOptions,
  CreateTuwueetForm,
  CreateTuwueetImgPreview,
  TuwueetBtn,
} from '../styled/HomeStyles';

function CreateTuwueet({ loadTuwueets }) {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);
  const textInput = useRef(null);
  const { userData, profilePicture } = useContext(UserContext);

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

  async function postTuwueet(e) {
    e.preventDefault();
    e.target.reset();
    const token = getAuthToken();
    const validToken = (await validateToken(token)).data;
    if (validToken) {
      await POST(
        'tuwueets/create',
        { text, img, username: userData.user.username, pfp: profilePicture },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token,
          },
        }
      );
      setImg(null);
      setText('');
      loadTuwueets();
      textInput.current.innerText = '';
    }
  }

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
        {img && (
          <CreateTuwueetImgPreview>
            <img src={img} alt="test" width="100%" />
            <span onClick={() => setImg(null)}>&times;</span>
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
