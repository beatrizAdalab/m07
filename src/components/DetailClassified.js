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
                            detalle
                            id:{_id}
                            name: {name}
                            price: {price}
                            description: {description}
                        </div>
                    )
                }}
            </LoginConsumer>
        )
    }



}

export default DetailClassified;




