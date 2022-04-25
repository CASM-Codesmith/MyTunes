import React from 'react';
import '../scss/newReview.scss';

const NewReview = (props) => {
    return (
        <button id="newReviewButton" type="submit">New Review</button>
    );
}

export default NewReview;

// let postParams = {};
// const handleReviewBodyChange = (e) => {
//     postParams['reviewBody'] = e.target.value;
// }
// const handleInputChange = (e) => {
//     postParams['songName'] = e.target.value
//     console.log(postParams)
// }
// const handleClick = () => {
//     props.postReview(postParams)
//     console.log('this is ', props.state);
// }


// <input type="text" placeholder="Enter a song's name" onChange={handleSongNameChange}/>
// <textarea placeholder="Type the song review here" onChange={handleReviewBodyChange}/>
// <button id="userSearchButton" type="button" onClick={handleClick}>Search</button>

// Separate input fields for each property:
// Track
// Artist
// Album
// Genre
// Rating
