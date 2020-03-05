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

    handleSignUp = async (e) => {
        e.preventDefault();
        const URL=`${process.env.REACT_APP_DB_AUTH_URL}/signup`;
        const newUser = {
            email: this.state.emailSignUp,
            password: this.state.passwordSignUp,
            display_name: this.state.display_nameSignUp,
        }
        console.log('Signing up with', newUser);
        await request.post(URL, newUser)
        .then((result) => {
            result.body.displayName = result.body.display_name;
            this.props.setUser(result.body);
            this.props.history.push('/');
        })
        .catch((err) => { 
            alert(err); 
            console.log(err);
        })       
}
    
    handleLogin = async (e) => {
        e.preventDefault();
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
        this.props.setUser([]);
        this.props.history.push('/');
    }

    // Put user into state and in persistence on login via callback
    setUser = (userLoggingIn) => {
        localStorage.setItem('user', JSON.stringify(userLoggingIn));
        this.setState({ user: userLoggingIn });
    }

    
    render() {
        return (
            <div className='login-container'>
                <form onSubmit={this.handleLogin}>
                    <div className='signin-container'>
                    <h2>Log In</h2>
                        <label>Email
                            <input onChange={(e) => this.setState({ emailLogin: e.target.value })} value={this.state.emailLogin} />
                        </label>
                        <label>Password
                            <input type="password" onChange={(e) => this.setState({ passwordLogin: e.target.value })} value={this.state.passwordLogin} />
                        </label>
                        <button>Login</button>
                    </div>
                </form>
                <form onSubmit={this.handleSignUp}>
                    <div className='signup-container'>
                    <h2>Sign Up</h2>
                        <label>Email
                            <input onChange={(e) => this.setState({ emailSignUp: e.target.value })} value={this.state.emailSignUp} />
                        </label>
                        <label>Password
                            <input type="password" onChange={(e) => this.setState({ passwordSignUp: e.target.value })} value={this.state.passwordSignUp} />
                        </label>
                        <label>Display Name
                            <input onChange={(e) => this.setState({ display_nameSignUp: e.target.value })} value={this.state.display_nameSignUp} />
                        </label>
                        <button>Sign Up</button>
                    </div>
                </form>
                <div className='logout-container'>
                <h2>Logout</h2>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
        )
    }
}
