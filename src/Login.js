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
        console.log('Signing up with', newUser);
        await request.post(URL, newUser)
        .then((result) => {
            this.props.setUser(result.body);
            this.props.history.push('/');
        })
        .catch((err) => { 
            alert(err); 
            console.log(err);
        })       
}
    
    handleLogin = async () => {
        const URL=`${process.env.REACT_APP_DB_AUTH_URL}/signin`;
        const existingUser = {
            email: this.state.emailLogin,
            password: this.state.passwordLogin,
        }
        await request.post(URL, existingUser)
            .then((result) => {
                this.props.setUser(result.body);
                this.props.history.push('/');
            })
            .catch((err) => { 
                alert(err); 
                console.log(err);
            })       
    }

    handleLogout = () => {
        localStorage.clear();
        window.location = ('/');
    }

    
    render() {
        return (
            <div className='login-container'>
                <div className='signin-container'>
                <h2>Log In</h2>
                    <label>Email
                        <input onChange={(e) => this.setState({ emailLogin: e.target.value })} value={this.state.emailLogin} />
                    </label>
                    <label>Password
                        <input onChange={(e) => this.setState({ passwordLogin: e.target.value })} value={this.state.passwordLogin} />
                    </label>
                    <button onClick={this.handleLogin}>Login</button>
                </div>
                <div className='signup-container'>
                <h2>Sign Up</h2>
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
                <div className='logout-container'>
                <h2>Logout</h2>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}
