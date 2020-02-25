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
            },
            redirect: true
        }, () => (console.log(this.state)))
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            console.log(this.state.paramsFilter.params, 'hshsh')
            const queries = urlRouter.buildURLSearch(this.state.paramsFilter)

            return <Redirect to={`/listClassifieds/:${queries}`} />
        }
    }

    getRedirect = (params) => {
        const data = this.state
        this.setState({
            ...data,
            paramsFilter: params,
        }, () => { this.getStore(this.state.paramsFilter) })
    }


    render() {
        const { classifieds, tags, loaded } = this.state.store
        return (
            <LoginConsumer>
                {(value) => {

                    return (

                        < div className='' >
                            {this.renderRedirect()}
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