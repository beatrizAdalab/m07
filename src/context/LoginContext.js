import React, { Component } from 'react';
import { api } from '../api'

const ContextLogin = React.createContext({});
export const LoginProvider = ContextLogin.Provider
export const LoginConsumer = ContextLogin.Consumer

class LoginContext extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            register: false,
            error: false,
            userName: '',
            userPassword: ''
        };
    }

    loginUser = async (userName, userPassword) => {
        const isLogin = await api.login(userName, userPassword)
        const error = isLogin.error
        const dataAccess = this.state
        if (isLogin.success) {
            this.setState({
                login: true,
                register: true,
                error: false,
                userName,
                userPassword
            })
        } else {
            this.setState({
                ...dataAccess, error
            })
        }
    }

    registerUser = async (userName, userPassword) => {
        const isRegister = await api.register(userName, userPassword)
        const error = isRegister.error
        const dataAccess = this.state
        if (isRegister) {
            this.setState({
                login: false,
                register: true,
                userName,
                userPassword
            })
        } else {
            this.setState({
                dataAccess, error
            })
        }
    }

    resetAccess = async () => {
        this.setState({
            login: false,
            register: false,
            error: false,
            userName: '',
            userPassword: ''
        })
    }


    render() {
        const access = this.state
        return (
            <LoginProvider
                value={{
                    access,
                    loginUser: this.loginUser,
                    registerUser: this.registerUser,
                    resetAccess: this.resetAccess
                }}>
                {this.props.children}
            </LoginProvider>
        )
    }
}

export default LoginContext;