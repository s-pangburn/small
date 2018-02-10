import merge from 'lodash/merge';

import { RECEIVE_CLOUDINARY_KEYS } from '../actions/api_actions';

const defaultState = {};

const ApiReducer = (state = defaultState, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CLOUDINARY_KEYS:
            return merge({}, action.apiKeys);
        default:
            return state;
    }
};

export default ApiReducer;
