//ACTION CREATOR
import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log("Awaiting to fetch posts");
    await dispatch(fetchPosts());   //dispatching manually------calling action creator from inside of another action creator
    console.log("fetched posts details");


      const userIds=_.uniq(_.map(getState().posts,'userId'));//gives unique userID
      userIds.forEach(id=>dispatch(fetchUser(id)));        //for each userID call fetchuser


      console.log(userIds);


    // _.chain(getState().posts)   //get the posts and this will be passed as argument to the second level
    //     .map('userId')
    //     .uniq()
    //     .forEach(id => dispatch(fetchUser(id)))
    //     .value();


};

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: response.data });
};


export const fetchUser = (id) => async (dispatch) => {

    const response = await jsonPlaceholder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data })
}






// export const fetchPosts=()=>{

//     return function(dispatch,state){
//         const promise =jsonPlaceholder.get('./posts');

//         return{
//             type:'FETCH_POSTS',
//             payload:promise
//         };

//     }
// };







// //NON -REFACTORED CODE
// export const fetchPosts=()=>{

//     return async function (dispatch,getState) {

//         const response=await jsonPlaceholder.get('./posts');

//         dispatch({
//             type:'FETCH_POSTS',
//             payload:response


//         });

//     };
// };