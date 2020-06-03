import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';




export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // console.log("Start of fetchpostanduser");
    await dispatch(fetchPosts());

    let userId = _.uniq(_.map(getState().posts, "userId"));
    // console.log(id);

    userId.forEach(id => {
        dispatch(fetchUser(id));
    });

};

export const fetchPosts = () => {

    // return async function (dispatch, getState) {
    return async (dispatch) => {

        const response = await jsonPlaceholder.get('/posts');

        // return {
        //     type: "FETCH_POSTS",
        //     payload: response
        // };

        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        });
    }


};




export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: "FETCH_USER", payload: response.data });
}




//Calling request just once using lodash liberaries
//Cant call more than once
// export const fetchUser = (id) => {
//     return  (dispatch) => {
//         _fetchUser(id,dispatch);
//     };
// };

// const _fetchUser = _.memoize(async (id,dispatch) => {

//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     // console.log("response" + response.data);

//     dispatch({
//         type: "FETCH_USER",
//         payload: response.data
//     })

// });