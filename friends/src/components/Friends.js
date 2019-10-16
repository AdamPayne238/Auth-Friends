import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import AddFriend from "./AddFriend";

import styled from "styled-components";

const StyledFriends = styled.div`
width: 45%;
margin: auto;
`;

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
                 //StyledFriends is a div
                 return <StyledFriends className="friends" key={friendObj.id}>
                            <p>{friendObj.name}</p>
                            <p>{friendObj.age}</p>
                            <p>{friendObj.email}</p>
                        </StyledFriends>
             })}
        </div>
    )
}

export default Friends;