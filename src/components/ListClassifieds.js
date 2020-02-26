import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { urlRouter } from '../router';
import { api } from '../api'
import { LoginConsumer } from '../context/LoginContext';
import FilterClassifieds from './FilterClassifieds'
import CardClassified from './CardClassified'



class ListClassifieds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: {
                classifieds: [],
                tags: [],
                loaded: true
            },
            paramsFilter: {
                name: '',
                price: '',
                venta: '',
                tag: ''
            },
            redirect: false
        };
    }


    componentDidMount() {
        const url = this.props.location.search
        const paramsUrl = urlRouter.searchStringToObject(url)
        const objectFilter = urlRouter.buildObjectFilter(paramsUrl)
        this.getStore(paramsUrl) // meto los anuncios en store
        this.getParamsFilter(objectFilter) // el objeto para filtrar en store
    }

    getStore = async (paramsApi) => {
        this.setState({
            store: {
                classifieds: await api.getClassifieds(paramsApi),
                tags: await api.getTags(),
                loaded: false
            }
        })
    }

    getParamsFilter = (paramsSearch) => {
        this.setState({
            paramsFilter: {
                ...paramsSearch
            }
        }, ()=> console.log(this.state, 'paramsFileter'))
    }

    handleChange = (e) => {
        const data = this.state.paramsFilter
        const element = e.target
        const name = element.name
        const value = element.value




        this.setState({
            paramsFilter: { ...data, [name]: value }
        })

    }

    render() {
console.log(this.state.paramsFilter, 'gagaga')
        const { classifieds, tags, loaded } = this.state.store
        return (
            <LoginConsumer>
                {(value) => {

                    return (
                        < div className=''>
                            <div className='d-flex flex-column pb-3'>
                                <FilterClassifieds
                                    tags={tags}
                                    paramsFilter={this.state.paramsFilter}
                                    clearForm={this.clearForm}
                                    handleChange={this.handleChange}
                                />
                                <Link to='/newClassified'>
                                    <button type="button" className="btn btn-outline-success w-100 ">New classified</button>
                                </Link>
                            </div>

                            {classifieds.length > 0 ?
                                <div className='container-classifieds pt-4'>
                                    <div className='row'>
                                        {classifieds.map(item => (
                                            <CardClassified
                                                classified={item}
                                                key={item._id} />
                                        ))}
                                    </div>
                                </div>
                                : <div>Its seems that there is no classifieds... try again</div>
                            }
                        </div>
                    )
                }}
            </LoginConsumer>
        )
    }
}

export default ListClassifieds;