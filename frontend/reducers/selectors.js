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
    if (likes[likeId].story_id === parseInt(story_id)) {
      storyLikes.push(like);
    }
  });
  return storyLikes;
};
