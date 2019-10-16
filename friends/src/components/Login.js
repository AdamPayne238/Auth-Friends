import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
    const [ credentials, setCredentials ] = useState({ username: '', password: ''})
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
            localStorage.setItem('token', response.data.payload)
            props.history.push('/friends')
        })
        .catch(error => {
            console.log(error.response)
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
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    name="password" 
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;

