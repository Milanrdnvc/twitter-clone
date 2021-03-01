import {
  SubmitCommentWrapper,
  SubmitCommentForm,
  SubmitCommentOptions,
} from '../styled/CommentsStyles';
import img from '../../pictures/pfp.jpg';
import imageIcon from '../../pictures/image.svg';

function SubmitComment() {
  return (
    <SubmitCommentWrapper>
      <SubmitCommentForm>
        <SubmitCommentOptions>
          <input type="text" placeholder="Write Your Comment" />
          <input type="file" />
          <img src={imageIcon} alt="Image icon" width="30px" />
        </SubmitCommentOptions>
        <button type="submit">Submit</button>
      </SubmitCommentForm>
      <img src={img} alt="" width="100%" />
    </SubmitCommentWrapper>
  );
}

export default SubmitComment;
