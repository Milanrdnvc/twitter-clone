import {
  CreateTweetBtnStyles,
  CreateTweetStyles,
  CreateTweetFormStyles,
  CreateTweetPfpStyles,
  CreateTweetOptionsStyles,
  CreateTweetWrapperStyles,
  TweetBtnStyles,
} from '../styled/FeedStyles';
import pfp from '../../pictures/pfp.jpg';

function CreateTweet() {
  return (
    <>
      <CreateTweetBtnStyles>
        <svg
          style={{
            maxWidth: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          viewBox="0 0 24 24"
          class="r-jwli3a r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"
        >
          <g>
            <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
          </g>
        </svg>
      </CreateTweetBtnStyles>
      <CreateTweetStyles>
        <CreateTweetPfpStyles src={pfp} />
        <CreateTweetWrapperStyles>
          <CreateTweetFormStyles placeholder="What's happening?" rows="5" />
          <CreateTweetOptionsStyles>
            <svg
              style={{ width: '30px', cursor: 'pointer' }}
              viewBox="0 0 24 24"
              class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-1q142lx r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"
            >
              <g>
                <path
                  fill="#fa0095"
                  d="M19.75 2H4.25C3.01 2 2 3.01 2 4.25v15.5C2 20.99 3.01 22 4.25 22h15.5c1.24 0 2.25-1.01 2.25-2.25V4.25C22 3.01 20.99 2 19.75 2zM4.25 3.5h15.5c.413 0 .75.337.75.75v9.676l-3.858-3.858c-.14-.14-.33-.22-.53-.22h-.003c-.2 0-.393.08-.532.224l-4.317 4.384-1.813-1.806c-.14-.14-.33-.22-.53-.22-.193-.03-.395.08-.535.227L3.5 17.642V4.25c0-.413.337-.75.75-.75zm-.744 16.28l5.418-5.534 6.282 6.254H4.25c-.402 0-.727-.322-.744-.72zm16.244.72h-2.42l-5.007-4.987 3.792-3.85 4.385 4.384v3.703c0 .413-.337.75-.75.75z"
                ></path>
                <circle fill="#fa0095" cx="8.868" cy="8.309" r="1.542"></circle>
              </g>
            </svg>
            <TweetBtnStyles>Tuwueet</TweetBtnStyles>
          </CreateTweetOptionsStyles>
        </CreateTweetWrapperStyles>
      </CreateTweetStyles>
    </>
  );
}

export default CreateTweet;
