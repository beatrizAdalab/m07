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
        const url = this.props.match.url;
        const params = urlRouter.extractParamsUrlSearch(url)
        this.getStore(params)
    }

    getStore = async (params) => {
        this.setState({
            store: {
                classifieds: await api.getClassifieds(params),
                tags: await api.getTags(),
                loaded: false
            },
            paramsFilter: {
                params
            }
        }, () => (console.log(this.state)))
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            const queries = urlRouter.buildURLSearch(this.state.params)
            return <Redirect to={`/listClassifieds/:${queries}`} />
        }
    }

    getRedirect(params) {
        const dataState = this.state
        console.log(dataState, 'hshsh')
    }


    render() {
        console.log(this.state, 'hsssssshsh')

        const { classifieds, tags, loaded } = this.state.store
        return (
            <LoginConsumer>
                {(value) => {
                    { this.renderRedirect() }
                    return (
                        < div className='' >
                            <div className='d-flex flex-column pb-3'>
                                <FilterClassifieds tags={tags} paramsFilter={this.state.paramsFilter} getRedirect={this.getRedirect} />
                                {/* <Link to='/newClassified'>
                                    <button type="button" className="btn btn-outline-success w-100 ">New classified</button>
                                </Link> */}
                            </div>

                            {classifieds.length > 0 ?
                                <div className='container-classifieds pt-4'>
                                    <div className='row'>
                                        {classifieds.map(item => (
                                            <CardClassified classified={item} key={item._id} />
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