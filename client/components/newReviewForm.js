import React from 'react';
//import '../scss/newReview.scss';

const newReviewForm = (props) => {
    let postParams = {};
    const handleSongNameChange = (e) => {
        postParams['name'] = e.target.value;
    }
    const handleArtistNameChange = (e) => {
        postParams['artist'] = e.target.value
    }
    const handleAlbumNameChange = (e) => {
        postParams['album'] = e.target.value;
    }
    const handleGenreChange = (e) => {
        postParams['genre'] = e.target.value
    }
    const handleRatingChange = (e) => {
        postParams['rating'] = e.target.value
    }
    const handleReviewBodyChange = (e) => {
        postParams['rating'] = e.target.value
    }
    const handleClick = () => {
        props.postReview(postParams)
    }


    return (
        <form>
            <input type="text" placeholder="Song" onChange={handleSongNameChange}/>
            <input type="text" placeholder="Artist" onChange={handleArtistNameChange}/>
            <input type="text" placeholder="Album" onChange={handleAlbumNameChange}/>
            <input type="text" placeholder="Genre" onChange={handleGenreChange}/>
            <input type="text" placeholder="Rating" onChange={handleRatingChange}/>
            <textarea type="text" placeholder="Review Body" onChange={handleReviewBodyChange}/>
            <button id="newReviewSubmit" type="button" onClick={handleClick}>Submit Review</button>
        </form>
    );
}

export default newReviewForm;




