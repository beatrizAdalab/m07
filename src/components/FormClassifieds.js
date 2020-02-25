import React, { Component } from 'react';
import { LoginConsumer } from '../context/LoginContext';

class FormClassified extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classified: {
                name: '',
                price: 0,
                description: '',
                tags: [],
                type: "buy",
                photo: '',
            }
        }
    }

    handleChange = (e) => {
        const element = e.currentTarget

        this.setState({
            classified: { [element.name]: element.value }
        })
    }

    clickForm = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        const { name, price, description, tags, type, photo } = this.state.classified
        return (
            <LoginConsumer>
                {(value) => {
                    return (
                        <form
                            className='pt-5 w-100'
                            onSubmit={this.clickForm}>

                            <div className='form-group'>
                                <label htmlFor='userName'>Name <small className='text-muted'> * </small> </label>
                                <input
                                    className='form-control'
                                    required
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={name}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='userName'>Description</label>
                                <textarea
                                    className='form-control'
                                    value={description}
                                    onChange={this.handleChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='userName'>Price <small className='text-muted'> * </small> </label>
                                <input
                                    className='form-control'
                                    required
                                    type='number'
                                    id='price'
                                    name='price'
                                    value={price}
                                    onChange={this.handleChange}
                                />
                            </div>


                            <div className='form-group d-flex justify-content-center pt-2'>
                                <button
                                    className='btn btn-primary rounded'
                                    type='submit'>
                                    New
                                    </button>
                            </div>
                        </form>

                    )
                }}
            </LoginConsumer>)

    }







}

export default FormClassified;











