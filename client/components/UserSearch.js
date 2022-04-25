import React from 'react';
import '../scss/UserSearch.scss';

const UserSearch = (props) => {
    //const onClick = (e) => {
        // Tracks.find(e.target.value)
    //     e.preventDefault();
    // }
    return(
        <form action="/" method="get" /*onClick={onClick}*/>
            <input type="text" placeholder="Enter a user name"/>
            <button id="userSearchButton" type="submit">Search</button>
        </form>
    );
};
export default UserSearch;

// call userQuery with a params.username

// let queryParams = {};
// const handleChangeQuery = (e) => {
//     queryParams['username'] = e.target.value
//     console.log(queryParams)
// }
// const handleClick = () => {
//     props.queryUsers(queryParams)
//     console.log('this is ', props.state);
// }


// <input type="text" placeholder="Enter a user's name" onChange={handleChangeQuery}/>
// <button id="userSearchButton" type="button" onClick={handleClick}>Search</button>