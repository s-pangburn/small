import { values } from 'lodash';

export const selectAllStories = ({ stories }) => values(stories);

export const commentsByStoryId = ({ comments }, story_id) => {
  const storyComments = [];

  Object.keys(comments).forEach(commentId => {
    const comment = comments[commentId];
    if (comments[commentId].story_id === parseInt(story_id)) {
      storyComments.push(comment);
    }
  });
  return storyComments;
};

export const likesByStoryId = ({ likes }, story_id) => {
  const storyLikes = [];

  Object.keys(likes).forEach(likeId => {
    const like = likes[likeId];
    if (like.story_id === parseInt(story_id)) {
      storyLikes.push(like.user_id);
    }
  });
  return storyLikes;
};

export const followsByUserId = ({ follows }, user_id) => {
  const userFollows = [];

  Object.keys(follows).forEach(followId => {
    const follow = follows[followId];
    if (follow.follower_id === parseInt(user_id)) {
      userFollows.push(follow.followee_id);
    }
  });
  return userFollows;
};
