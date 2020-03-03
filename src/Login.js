import React, { Component } from 'react'
import request from 'superagent';

export default class Login extends Component {
    
    state = {
        emailSignUp: '',
        passwordSignUp: '',
        display_nameSignUp: '',
        emailLogin: '',
        passwordLogin: '',
    }

    handleSignUp = async () => {
        const URL=`${process.env.REACT_APP_DB_AUTH_URL}/signup`;
        const newUser = {
            email: this.state.emailSignUp,
            password: this.state.passwordSignUp,
            display_name: this.state.display_nameSignUp,
        }
        const result = await request.post(URL, newUser);
        console.log(result);
        window.location = ('/');
    }
    
    handleLogin = async () => {
        const URL=`${process.env.REACT_APP_DB_AUTH_URL}/signin`;
        const newUser = {
            email: this.state.emailLogin,
            password: this.state.passwordLogin,
        }
        const result = await request.post(URL, newUser);
        console.log(result);
        localStorage.setItem('user', JSON.stringify(result.body));
        window.location = ('/');
    }

    handleLogout = () => {
        localStorage.clear();
        window.location = ('/');
    }

    
    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className='signup-container'>
                    <label>Email
                        <input onChange={(e) => this.setState({ emailSignUp: e.target.value })} value={this.state.emailSignUp} />
                    </label>
                    <label>Display Name
                        <input onChange={(e) => this.setState({ display_nameSignUp: e.target.value })} value={this.state.display_nameSignUp} />
                    </label>
                    <label>Password
                        <input onChange={(e) => this.setState({ passwordSignUp: e.target.value })} value={this.state.passwordSignUp} />
                    </label>
                    <button onClick={this.handleSignUp}>Sign Up</button>
                </div>
                <div className='signin-container'>
                    <label>Email
                        <input onChange={(e) => this.setState({ emailLogin: e.target.value })} value={this.state.emailLogin} />
                    </label>
                    <label>Password
                        <input onChange={(e) => this.setState({ passwordLogin: e.target.value })} value={this.state.passwordLogin} />
                    </label>
                    <button onClick={this.handleLogin}>Login</button>
                </div>
                <div className='logout-container'>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}
