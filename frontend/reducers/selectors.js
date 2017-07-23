import { values } from 'lodash';

export const selectAllStories = ({ stories }) => values(stories);

// export const selectAuthorById = ({ authors }, id) => values(authors)[id];
