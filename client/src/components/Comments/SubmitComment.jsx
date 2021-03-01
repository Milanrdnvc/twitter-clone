import imageIcon from '../../pictures/image.svg';
import { useState } from 'react';
import {
  SubmitCommentWrapper,
  SubmitCommentForm,
  SubmitCommentOptions,
  SubmitCommentImagePreview,
} from '../styled/CommentsStyles';

function SubmitComment() {
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
  return (
    <SubmitCommentWrapper>
      <SubmitCommentForm>
        <SubmitCommentOptions>
          <div contentEditable="true" />
          <input type="file" onChange={handleFileInputChange} />
          <img src={imageIcon} alt="Image icon" width="30px" />
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
