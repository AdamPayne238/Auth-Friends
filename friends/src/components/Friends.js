import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = (props) => {
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then(response => setFriends(console.log("Get Response", response.data), response.data))
        .catch(error => console.log(console.log("Get Error", error), error))
    }, [])

    return(
        <div>
             <h1>Friends</h1>
             {/* {friends.map(friendObj => {
                 <div key={friendObj.id}>
                     <p>{friendObj.name}</p>
                 </div>
             })} */}
        </div>
    )
}

export default Friends;