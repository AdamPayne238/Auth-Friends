import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth.js";
//
import styled from "styled-components";

const StyledForm = styled.div`
display: flex;
flex-direction: column;
`;

const StyledInput = styled.input`
height: 3rem;
width: 20rem;
font-size: 2rem;
margin: 20px;
border: 2px solid black;
padding: 5px;
border-radius: 8px;
`;


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
        
        <StyledForm>
            <h2>Add New Friend</h2>
            <form onSubmit={onSubmit}>
                <div>
                    {/* inputs * 3 */}
                <StyledInput 
                    type="text"
                    name="name"
                    value={newFriend.name}
                    placeholder="New Name"
                    onChange={handleChange}
                />
                </div>
                <div>
                <StyledInput 
                    type="text"
                    name="age"
                    value={newFriend.age}
                    placeholder="New Age"
                    onChange={handleChange}
                />
                </div>
                <div>
                <StyledInput 
                    type="text"
                    name="email"
                    value={newFriend.email}
                    placeholder="New Email"
                    onChange={handleChange}
                />
                </div>
                <button onClick={handleChange}>Add Friend</button>
            </form>
        </StyledForm>
    )
}

export default AddFriend;