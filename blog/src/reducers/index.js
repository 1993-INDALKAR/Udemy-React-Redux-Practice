import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({

    // replaceMe: () => 'Hi there'

    posts: postsReducer,
    users: usersReducer

});