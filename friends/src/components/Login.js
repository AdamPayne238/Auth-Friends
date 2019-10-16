import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import styled from "styled-components";

const Login = props => {
    const [ credentials, setCredentials ] = useState({ username: '', password: '' })
    //CLASS COMPONENT
// class Login extends React.Component {
//   state = {
//     credentials: {
//       username: '',
//       password: ''
//     }
//   };

    const handleChange = event => {
        setCredentials(
            {
                ...credentials,
                [event.target.name]: event.target.value
            }
        )
    }
        //CLASS COMPONENT
    // handleChange = e => {
    //     this.setState({
    //       credentials: {
    //         ...this.state.credentials,
    //         [e.target.name]: e.target.value
    //       }
    //     });
    //   };

    const onSubmit = event => {
        event.preventDefault();
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(response => {
            console.log("Post Response", response)
            localStorage.setItem('token', response.data.payload)
            props.history.push('/friends')
        })
        .catch(error => {
            console.log(error)
            setCredentials({ username: "", password: ""})
        })
    }
        //CLASS COMPONENT
    // login = e => {
    //     e.preventDefault();
    //     axiosWithAuth()
    //       .post('/api/login', this.state.credentials)
    //       .then(res => {
    //         localStorage.setItem('token', res.data.payload);
    //         this.props.history.push('/protected');
    //       })
    //       .catch(err => console.log(err.response));
    //   };

    return(
        <StyledForm>
            <form onSubmit={onSubmit}>
                <div>
                <StyledInput 
                    type="text" 
                    name="username" 
                    placeholder="User Name"
                    value={credentials.username}
                    onChange={handleChange}
                />
                </div>
                <div>
                <StyledInput 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                </div>
                <button>Login</button>
            </form>
        </StyledForm>
    );
};

export default Login;



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

