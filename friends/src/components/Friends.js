import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import AddFriend from "./AddFriend";

import styled from "styled-components";

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

    //Delete is a filter that hooks onto the ID of an item
    //pass id into the function
    //add parenthesis to onlick so that you can pass ID into the button as well
    const deleteFriend = id => {
        axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then(response => {
            console.log("Delete Response", response)
        })
    }

    return(
        <div>
            <AddFriend />
             {friends.map(friendObj => {
                 //StyledFriends is a div
                 return <StyledFriends className="friends" key={friendObj.id}>
                            <p>{friendObj.name}</p>
                            <p>{friendObj.age}</p>
                            <p>{friendObj.email}</p>
                            <button>Edit</button>
                            <button onClick={() => deleteFriend(friendObj.id)}>Delete</button>
                        </StyledFriends>
             })}
        </div>
    )
}

export default Friends;

const StyledFriends = styled.div`
line-height: 80px;
width: 600px;
margin: 40px;
margin: auto;
&:hover{
    background-image: linear-gradient(to right, #FFFFFF , black);
  }
}
`;