import CreateTweet from './CreateTweet';
import Tweet from './Tweet';
import FeedWrapper from '../../styled/FeedStyles';
import { FeedHeader } from '../../styled/FeedStyles';

function Feed() {
  return (
    <FeedWrapper>
      <FeedHeader>Latest Tweets</FeedHeader>
      <CreateTweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </FeedWrapper>
  );
}

export default Feed;
