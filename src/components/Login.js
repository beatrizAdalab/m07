import React, { useState , Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { LoginConsumer } from '../context/LoginContext';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:'',
            userPassword:'',
            redirect:undefined
        }
    }

    handleChange = (e) => {
        const element = e.target
        const value= element.value
        const name = element.name

        this.setState({
             [name]: value 
        })
    }


    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={`/listClassifieds/:?all`} />
        }
    }

render(){
    const {userName, userPassword, redirect} = this.state
    return (
       
        <LoginConsumer>
            {(value) => {

                const checkLogin = async (e) => {
                    e.preventDefault()
                    await value.loginUser(userName, userPassword)
                }

                

                return (
                    <div className='container-access pt-4'>
                    {this.renderRedirect()}

                        {value.access.error ?
                            <div className='alert alert-danger' role='alert'>
                                Ups.. {value.access.error}
                            </div> : < div className='alert alert-danger invisible ' role='alert'>
                                Ups.. {value.access.error}
                            </div>
                        }
                        <div className=' d-flex justify-content-center pt-4'>
                            <div className='d-flex flex-column justify-content-center align-items-center container-form-access'>
                                <h2 className='text-center'>Login</h2>
                                <form
                                    className='pt-5 w-100'
                                    onSubmit={checkLogin}>
                                    <div className='form-group'>
                                        <label htmlFor='userName'>User Name <small className='text-muted'> * </small> </label>
                                        <input
                                            className='form-control'
                                            required
                                            type='text'
                                            id='userName'
                                            name='userName'
                                            value={userName}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label htmlFor='userPassword'>User Password <small className='text-muted'> * </small> </label>
                                        <input
                                            className='form-control'
                                            required
                                            type='password'
                                            id='userPassword'
                                            name='userPassword'
                                            value={userPassword}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className='form-group d-flex justify-content-center pt-2'>
                                        <button
                                            className='btn btn-primary rounded'
                                            type='submit'>
                                            Login
                                    </button>
                                    </div>
                                </form>

                                <Link to='/register'>
                                    <p
                                        onClick={value.resetAccess}>
                                        Haven´t any account?
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }}
        </LoginConsumer>
    );

}
   
}

export default Login



