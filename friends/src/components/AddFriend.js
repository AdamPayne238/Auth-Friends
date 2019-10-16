import React, { useState, useEffect } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth.js";
//
import styled from "styled-components";

const AddFriend = (props) => {
    const [ newFriend, setNewFriend ] = useState({name: "", age: "", email: ""})

    const handleChange = event => {
        setNewFriend(
            {
                ...newFriend,
                [event.target.name]: event.target.value
                
            }
        )
    }

    useEffect(() => {
                //if editingFriend return
                if(props.editingFriend){
                    setNewFriend({ 
                        name: props.editingFriend.name, 
                        age: props.editingFriend.age, 
                        email: props.editingFriend.email 
                    });
                    //if not editing friend leave empty
                }else{
                  setNewFriend({ name: "", age: "", email: ""});
                }
        //if props.editingFriend ever changes we edit form accordingly
    }, [props.editingFriend])

    const onSubmit = event => {
        event.preventDefault()
        if(props.editingFriend){
            axiosWithAuth().put(`/api/friends/${props.editingFriend.id}`, newFriend)
            .then(response => {
                console.log("Put Response", response)
                //Renders on change instead of refresh
                props.setFriends(response.data)
                setNewFriend(
                    {
                        ...newFriend,
                        name: "",
                        age: "",
                        email: ""
                    } 
                );
            })
        } else {
        axiosWithAuth()
        .post("/api/friends", newFriend)
        .then(response => {
            console.log("Post Response", response)
            //Renders on change instead of refresh
            props.setFriends(response.data)
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
        }
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
                <button onClick={handleChange}>{props.editingFriend ? "Submit edit" : "Add Friend"}</button>
                <button>Cancel</button>
            </form>
        </StyledForm>
    )
}

export default AddFriend;

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
