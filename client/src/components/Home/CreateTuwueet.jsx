import pfp from '../../pictures/pfp.jpg';
import axios from 'axios';
import imageIcon from '../../pictures/image.svg';
import { useState } from 'react';
import {
  CreateTuwueetWrapper,
  CreateTuwueetTextInput,
  CreateTuwueetPfp,
  CreateTuwueetOptions,
  CreateTuwueetForm,
  CreateTuwueetImgPreview,
  TuwueetBtn,
} from '../styled/HomeStyles';

function CreateTuwueet({ getTuwueets }) {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

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
    console.log(img);
    e.preventDefault();
    e.target.reset();
    let token = localStorage.getItem('auth-token');
    if (token == null) {
      localStorage.setItem('auth-token', '');
      token = '';
    }
    const tokenRes = await axios.post('users/tokenIsValid', null, {
      headers: {
        'X-Auth-Token': token,
      },
    });
    if (tokenRes.data) {
      await axios.post(
        '/tuwueets/create',
        { text, img },
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': token,
          },
        }
      );
      setImg(null);
      setText('');
      getTuwueets();
    }
  }

  return (
    <CreateTuwueetWrapper>
      <CreateTuwueetPfp src={pfp} />
      <CreateTuwueetForm onSubmit={postTuwueet}>
        <CreateTuwueetTextInput
          contentEditable="true"
          onBlur={e => setText(e.target.innerText.trim())}
          onFocus={e => setText(e.target.innerText.trim())}
          onChange={e => setText(e.target.innerText.trim())}
          onKeyDown={e => setText(e.target.innerText.trim())}
          onKeyUp={e => setText(e.target.innerText.trim())}
          onPaste={e => setText(e.target.innerText.trim())}
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
