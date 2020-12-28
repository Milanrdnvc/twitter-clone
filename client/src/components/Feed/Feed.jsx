import FeedStyles from '../styled/FeedStyles';
import CreateTweet from './CreateTweet';
import Tweet from './Tweet';

function Feed() {
  return (
    <FeedStyles>
      <CreateTweet />
      <Tweet />
    </FeedStyles>
  );
}

export default Feed;
