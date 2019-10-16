import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import AddFriend from "./AddFriend";

const Friends = () => {
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then(response => {
            console.log("Get Response", response.data)
            setFriends(response.data)
        })
        .catch(error => {
             console.log("Get Error", error)
        })
    }, [])

    return(
        <div>
            <AddFriend />
             {friends.map(friendObj => {
                 return <div key={friendObj.id}>
                            <p>{friendObj.name}</p>
                            <p>{friendObj.age}</p>
                            <p>{friendObj.email}</p>
                        </div>
             })}
        </div>
    )
}

export default Friends;