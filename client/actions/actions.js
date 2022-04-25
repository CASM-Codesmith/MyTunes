/**
 * ************************************
 *
 * @module  actions.js
 * @author
 * @date
 * @description Action Creators
 *
 * ************************************
 */

// import actionType constants
import * as types from '../constants/actionTypes.js';

export const queryData = queryResults => ({
    type: types.QUERYDATA, 
    payload: queryResults
  });

  export const renderReview = reviewID => ({
    type: types.SHOWREVIEWDETAILS, 
    payload: reviewID
  });

  export const queryReviewsActionDispatch = params => {
    return dispatch => {
        
        function fetchReviews(params) { 
          const fetchURL = `/search/${params.selectedValue}/:${params.queryValue}`
          //  const result = await fetch(fetchURL)
          //  const data = result.json()   
          //  dispatch(queryData(data))
          dispatch(queryData([{ song: 'filler1', artist: "filler2", album: "filler3", genre: "filler4", RID: 0, showDetails: false, buttonText:  "Check the Review"}]))
        }
       fetchReviews(params)
    }   
  }

  /*******  User Search *******/

  // export const queryUser = queryResults => ({
  //   type: types.QUERYUSER,
  //   payload: queryResults
  // });

  // export const queryUsersActionDispatch = params => {
  //   return dispatch => {
  //       function fetchUsers(params) { 
  //         const fetchURL = `/user/:${params.username}`
          //  const result = await fetch(fetchURL)
          //  const data = result.json()   
          //  dispatch(queryData(data))
  //         dispatch(queryUser({ username: 'sampleUsername', reviews: [{ song: 'sampleSong', artist: 'sampleArtist', genre: "sampleGenre", RID: 0, showDetails: false }]}))
  //       }
  //      fetchUsers(params)
  //   }   
  // }

    /*******  Post Review *******/
  
  // export const postReview = postedReviewResults => ({
  //   type: types.POSTREVIEW, 
  //   payload: postedReviewResults
  // });

  // params = { songName: 'sampleSongName', reviewBody: 'sampleReviewBody};

  // export const postReviewActionDispatch = params => {
  //   return dispatch => {
  //       async function postReview(params) { 
  //         const fetchURL = `/user/:${params.songName}`
  //          const result = await fetch(fetchURL, {
  //                method: 'POST', //
  //                headers: { 'Content-Type' : 'application/json'},
  //                body: JSON.stringify(params.reviewBody)
  //         });
  //          const data = result.json()   
  //          dispatch(postReview(data))
  //         dispatch(postReview(params.reviewBody))
  //       }
  //      postReview(params)
  //   }   
  // }
  
