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
                type: '',
                photo: '',
            }
        }
    }

    render() {
        const { name, price, description, tags, type, photo } = this.props.paramsClassified
        const {handleChange, clickForm, textButton}= this.props
        return (
            <LoginConsumer>
                {(value) => {
                    return (
                        <form
                            className='pt-5 w-100'
                            onSubmit={clickForm}>

                            <div className='form-group'>
                                <label htmlFor='userName'>Name <small className='text-muted'> * </small> </label>
                                <input
                                    className='form-control'
                                    required
                                    type='text'
                                    id='name'
                                    name='name'
                                    value={name}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor='price'>Price <small className='text-muted'> * </small> </label>
                                <input
                                    className='form-control'
                                    required
                                    type='number'
                                    id='price'
                                    name='price'
                                    value={price}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='descirption'>Description</label>
                                <textarea
                                    name='description'
                                    id='description'
                                    className='form-control'
                                    value={description}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='photo'>Photo </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    id='photo'
                                    name='photo'
                                    value={photo}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='form-group p-0'>
                                <div className='custom-control custom-radio custom-control-inline'>
                                    <input
                                        checked={type==='buy'}
                                        type='radio'
                                        id='buy'
                                        name='type'
                                        value='buy'
                                        className='custom-control-input'
                                        onChange={handleChange}
                                    />
                                    <label className='custom-control-label' htmlFor='buy'>I want to buy</label>
                                </div>

                                <div className='custom-control custom-radio custom-control-inline'>
                                    <input
                                    checked={type==='sell'}
                                        type='radio'
                                        id='sell'
                                        name='type'
                                        value='sell'
                                        className='custom-control-input'
                                        onChange={handleChange}
                                    />
                                    <label className='custom-control-label' htmlFor='sell'>I want to sell</label>
                                </div>
                            </div>

                            <div className='form-group'>
                                <label htmlFor='tag'>Tag </label>
                                <input
                                    className='form-control'
                                    type='text'
                                    id='tag'
                                    name='tags'
                                    value={tags}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='form-group d-flex justify-content-center pt-2'>
                                <button
                                    className='btn btn-primary rounded'
                                    type='submit'>
                                    {textButton}
                                    </button>
                            </div>
                        </form>

                    )
                }}
            </LoginConsumer>)
    }

}

export default FormClassified;











