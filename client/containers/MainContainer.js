/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders 
 *
 * ************************************
 */

 import React, {Component} from "react";
 import SearchBar from '/client/components/songSearchBar.js'
 import SubmitReviewContainer from "./SubmitReviewContainer.js";
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions.js';
 import AllReviews from '/client/containers/AllReviewsContainer.js'
 
const mapStateToProps = state => ({
    reviews : state.review.queriedReviews
});


const mapDispatchToProps = dispatch => ({
    queryReviews : (params) => dispatch(actions.queryReviewsActionDispatch(params))
   });

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
          <div>
             <SearchBar
             queryReviews = {this.props.queryReviews}
             state = {this.props.reviews}
             ></SearchBar>
             <AllReviews></AllReviews>
             <SubmitReviewContainer />
          </div>
        );
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

// import UserSearchBar from '/client/components/UserSearchBar.js'
// import NewReviewButton from '/client/components/newReview.js'

// const mapStateToProps = state => ({
//     reviews : state.review.queriedReviews,
//     users: state.user.queriedUser,
//     postReview: state.post.postedReview,
//     newReviewSongName: state.song.newReviewSongName,
// });

// const mapDispatchToProps = dispatch => ({
//     queryReviews : (params) => dispatch(actions.queryReviewsActionDispatch(params)),
//     queryUsers : (params) => dispatch(actions.queryUsersActionDispatch(params)),
//     postReview: (params) => dispatch(actions.postReviewActionDispatch(params))
//    });

// class MainContainer extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return(
//           <div>
//              <SearchBar
//              queryReviews={this.props.queryReviews}
//                state={this.props.reviews}
//              ></SearchBar>
//              <AllReviews></AllReviews>
//              <UserSearchBar 
//                queryUsers={this.props.queryUsers}
//                state={this.props.users}
//              />
                // <NewReviewButton
                //   postReview={this.props.postReview}
                //   postReviewState={this.props.postedReview}
                //   newReviewSongNameState={this.props.newReviewSongName}
                // />
//           </div>
//         );
//       }
// }

// if showReviewInput === 'true', render the form

