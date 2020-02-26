import React, { Component } from 'react';
import { LoginConsumer } from '../context/LoginContext';
import { Redirect } from 'react-router-dom';
import { api } from '../api'
import FormClassified from './FormClassifieds'


class EditClassified extends Component {
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
            },
            status: {
                success: undefined,
                error: ''
            }
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.getClassified(id)
    }

    getClassified = async (id) => {
        const cl = await api.getDetail(id)
        console.log(cl)
        this.setState({
            classified: {
                name: cl.name,
                price: cl.price,
                description: cl.description,
                tags: cl.tags,
                type: cl.type,
                photo: cl.photo,
            },
            status: {
                success: undefined,
                error: ''
            }
        })
    }

    editClassified = async (id, classified) => {
        const editApi = await api.editClassified(id, classified)
        this.setState({
            status: {
                success: editApi.success,
                error: editApi.error
            }
        })
    }

    handleChange = (e) => {
        const element = e.target
        const data = this.state.classified
        const name = element.name
        const value =
            name === 'tags' ?
                element.value ? element.value.split(',') : [] :
                element.value;

        this.setState({
            classified: { ...data, [name]: value }
        })
    }

    renderRedirect = () => {
        const id = this.props.match.params.id
        const redirect = this.state.status.success
        console.log(redirect, 'redirect')
        if (redirect) {
            return <Redirect to={`/detailClassifieds/${id}`} />

        }
    }

    clickForm = async (e) => {
        const id = this.props.match.params.id
        e.preventDefault();
        this.editClassified(id, this.state.classified)
    }

    render() {
        console.log(this.state)
        return (

            <LoginConsumer>
                {(value) => {
                    const { success, error } = this.state.status
                    return (
                        <div className='container p-5'>
                            <h2>Edit Classified</h2>

                            {this.renderRedirect()}

                            <FormClassified
                                paramsClassified={this.state.classified}
                                handleChange={this.handleChange}
                                clickForm={this.clickForm}
                                textButton={'Edit'}
                            />
                        </div>
                    )
                }}
            </LoginConsumer>
        )
    }
}

export default EditClassified;