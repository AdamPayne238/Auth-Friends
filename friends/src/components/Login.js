import React, { useState } from "react";

function Login( postCredentials ){
    const [ userName, setUserName ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleName = event => {
        setUserName(event.target.value);
    };
    const handlePassword = event => {
        setPassword(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        const credentials = {
            userName: userName,
            password: password
        };
        postCredentials(credentials)
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>

                <input
                    userName="userName"
                    placeholder="User Name"
                    onChange={handleName}
                    value={userName}
                />
                <input
                    password="password"
                    placeholder="Password"
                    onChange={handlePassword}
                    value={password}
                />
                <button>Login</button>

            </form>
        </div>
    )
}

export default Login;

// class Login extends React.Component {
//   state = {
//     credentials: {
//       username: '',
//       password: ''
//     }
//   };
// i
//   handleChange = e => {
//     this.setState({
//       credentials: {
//         ...this.state.credentials,
//         [e.target.name]: e.target.value
//       }
//     });
//   };

//   login = e => {
//     e.preventDefault();
//     // login to retrieve the JWT token
//     // add the token to localstorage
//     // route to /protected (whatever landing page)
//     axiosWithAuth()
//       .post('/api/login', this.state.credentials)
//       .then(res => {
//         localStorage.setItem('token', res.data.payload);
//         this.props.history.push('/protected');
//       })
//       .catch(err => console.log(err.response));
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.login}>
//           <input
//             type="text"
//             name="username"
//             value={this.state.credentials.username}
//             onChange={this.handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             value={this.state.credentials.password}
//             onChange={this.handleChange}
//           />
//           <button>Log in</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;
