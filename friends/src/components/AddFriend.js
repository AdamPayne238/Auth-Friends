import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth.js";
//
const AddFriend = () => {
    const [ newFriend, setNewFriend ] = useState({name: "", age: "", email: ""})

    const handleChange = event => {
        setNewFriend(
            {
                ...newFriend,
                [event.target.name]: event.target.value
                
            }
        )
    }

    const onSubmit = event => {
        event.preventDefault()

        axiosWithAuth()
        .post("/api/friends", newFriend)
        .then(response => {
            console.log(response)
            setNewFriend(
                {
                    ...newFriend,
                    name: "",
                    age: "",
                    email: ""
                }
            )
        })
        .catch(error => console.log(error.response));
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={newFriend.name}
                    placeholder="New Name"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="age"
                    value={newFriend.age}
                    placeholder="New Age"
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    name="email"
                    value={newFriend.email}
                    placeholder="New Email"
                    onChange={handleChange}
                />
                <button onClick={handleChange}>Add New Friend</button>
            </form>
        </div>
    )
}

export default AddFriend;