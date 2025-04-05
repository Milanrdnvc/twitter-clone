import { useState, useRef, useEffect } from "react";
import {
  CreateTuwueetWrapper,
  CreateTuwueetTextInput,
  CreateTuwueetPfp,
  CreateTuwueetOptions,
  CreateTuwueetForm,
  CreateTuwueetImgPreview,
  TuwueetBtn,
} from "../styled/HomeStyles";

function CreateTuwueet({ loadTuwueets, loggedIn, setTuwueets }) {
  const [text, setText] = useState("");
  const [encodedImg, setEncodedImg] = useState(null);
  const textInput = useRef(null);

  return (
    <CreateTuwueetWrapper>
      <CreateTuwueetPfp />
      <CreateTuwueetForm>
        <CreateTuwueetTextInput
          contentEditable="true"
          onBlur={(e) => setText(e.target.innerText.trim())}
          onFocus={(e) => setText(e.target.innerText.trim())}
          onChange={(e) => setText(e.target.innerText.trim())}
          onKeyDown={(e) => setText(e.target.innerText.trim())}
          onKeyUp={(e) => setText(e.target.innerText.trim())}
          onPaste={(e) => setText(e.target.innerText.trim())}
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
          <img alt="Image icon" width="30px" />
          <input type="file" />
          <TuwueetBtn type="submit">Tuwueet</TuwueetBtn>
        </CreateTuwueetOptions>
      </CreateTuwueetForm>
    </CreateTuwueetWrapper>
  );
}

export default CreateTuwueet;
