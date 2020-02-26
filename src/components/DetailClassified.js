import React, { Component } from 'react';
import { api } from '../api'
import { LoginConsumer } from '../context/LoginContext';


class DetailClassified extends Component {
    constructor(props) {
        super(props);
        this.state = {
            classified: {}
        };
    }

    componentDidMount() {
        this.getDetailClassified()
    }

    getDetailClassified = async () => {
        const id = this.props.match.params.id
        console.log(id, 'id')
        this.setState({
            classified: await api.getDetail(id),
        })
    }

    render() {
        const { tags, _id, name, price, description, type, photo, updateAt } = this.state.classified
        return (

            <LoginConsumer>
                {(value) => {

                    return (

                        <div>
                            <h1>detalle</h1>
                            <div>id:{_id}</div>
                            <div>name: {name}</div>
                            <div>price: {price}</div>
                            <div>description: {description}</div>
                        </div>
                    )
                }}
            </LoginConsumer>
        )
    }



}

export default DetailClassified;




{/* 
                        {success === true ?
                                <div className='alert alert-success' role='alert'>
                                    Classified created
                            </div> :
                            success === false ?
                                    < div className='alert alert-danger' role='alert'>
                                        Ups..
                            </div> :
                                    < div className='alert invisible' role='alert'>
                                        Ups.. {error}
                            </div>
                            } */}