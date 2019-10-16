import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = () => {
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        axiosWithAuth()
        .get("/api/friends")
        .then(response => setFriends(response.data))
        .catch(error => console.log(console.log("Get Error", error), error))
    }, [])

    return(
        <div>
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

// const MyFriends = () => {
//   const [friends, setFriends] = useState([])

//   useEffect(() => {
//     axiosWithAuth()
//     .get("/friends")
//     .then(res => setFriends(res.data))
//     .catch(err => console.error(err))
//   })

//   return(
//     <>
//       <AddFriend />
//       <h1>MY FRIENDS!</h1>
//       {friends.map(friend => (
//         <div key={friend.id}>
//           <Friend banana={friend} />
//         </div>
//       ))}
//     </>
//   )

// }

// export default MyFriends; 