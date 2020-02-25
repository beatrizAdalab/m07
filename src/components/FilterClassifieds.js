import React, { Component } from 'react';
import { LoginConsumer } from '../context/LoginContext';

// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const initialParams = {
    name: '',
    price: '',
    venta: '',
    tag: '',
}

class FilterClassifieds extends Component {
    constructor(props) {
        super(props);
        this.state = {
       ...initialParams
        };
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props !== prevProps) {
    //         const params = this.props.paramsFilter.params
    //         this.setState({
    //             ...params
    //         })
    //     }
    // }

    render() {
        console.log(this.state, 'state')
    

        const { getRedirect, tags, paramsFilter } = this.props
        const { name, price,venta, tag } = this.props.paramsFilter
        console.log(paramsFilter, 'propos filters')

   
        const handleChange = param => (e) => {
            const element = e.currentTarget
            this.setState({
         
                           [element.name]: element.value
                        })
        }

    

        //const handleChange = param => (e) => {
        //    const element = e.currentTarget
        //     const data = this.state.params

        //     if (param === 'maxPrice') {
        //         this.setState({
        //             ...data,
        //             price: `0-${element.value}`
        //         })
        //     } else {
        //         this.setState({
        //             ...data,
        //             [element.name]: element.value
        //         })
        //     }
        // }


        // const searchClick = async (e) => {
        //     e.preventDefault()
        //     console.log(this.state)
        //     //getRedirect(this.state)
        // }

        // const clearForm = () => {
        //     this.setState({
        //         ...initialParams
        //     })
        // }

        return (
            <LoginConsumer>
                {(value) => {
                    return (
                        <div className='py-3'>

                            <div className='d-flex'>
                                <button type='button' className='btn btn-outline-primary' data-toggle='modal' data-target='#modalFilters'>
                                    Filters
                                </button>

                                <form
                                    className='w-100 pl-2'
                                    //onSubmit={searchClick}
                                    >
                                    <div className='input-group'>
                                        <input type='text'
                                            className='form-control'
                                            name='name' id='name'
                                            value={name}
                                            onChange={handleChange()} 
                                            />
                                        <div className='input-group-append'>
                                            <button className='btn btn-outline-secondary' type='submit'>  <FontAwesomeIcon icon={faSearch} /> </button>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className='modal fade' id='modalFilters' tabIndex='-1' role='dialog' aria-labelledby='modalFiltersTitle' aria-hidden='true'>
                                <div className='modal-dialog modal-dialog-centered' role='document'>
                                    <div className='modal-content'>

                                        <div className='modal-header'>
                                            <h5 className='modal-title' id='modalFiltersTitle'>Filters <small className='text-primary pl-5'>  classifieds </small>  </h5>
                                            <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                                                <span aria-hidden='true'>&times;</span>
                                            </button>
                                        </div>

                                        <div className='modal-body'>
                                            <form
                                                className='pr-4 pl-4'
                                                //onSubmit={searchClick}
                                                >
                                                <div className='form-group p-0'>
                                                    <label htmlFor='name'>What are you searching?</label>
                                                    <input type='text'
                                                        className='form-control'
                                                        name='name' id='name'
                                                        value={name}
                                                        onChange={handleChange()} 
                                                        />
                                                </div>

                                                <div className='form-group p-0'>
                                                    <select className='custom-select'
                                                        name='tag'
                                                        value={tag}
                                                        onChange={handleChange()}
                                                       >
                                                        <option value={''}>All tags</option>
                                                        {

                                                            tags.map(item => {
                                                                if (item) {
                                                                    return <option key={item} value={item}>{item}</option>
                                                                } else { return false }
                                                            })
                                                        }
                                                    </select>
                                                </div>

                                                <div className='form-group p-0'>
                                                    <label htmlFor='max-price'>Maximum price: </label>
                                                    <input
                                                        name='max-price'
                                                        type='number'
                                                        className='form-control'
                                                        value={price}
                                                        id='max-price'
                                                        onChange={handleChange('maxPrice')}
                                                    />
                                                </div>

                                                <div className='form-group p-0'>
                                                    <div className='custom-control custom-radio custom-control-inline'>
                                                        <input
                                                            type='radio'
                                                            id='buy'
                                                            name='venta'
                                                            value={true}
                                                            className='custom-control-input'
                                                            onChange={handleChange()}
                                                        />
                                                        <label className='custom-control-label' htmlFor='buy'>I want to buy</label>
                                                    </div>

                                                    <div className='custom-control custom-radio custom-control-inline'>
                                                        <input
                                                            type='radio'
                                                            id='sell'
                                                            name='venta'
                                                            value={false}
                                                            className='custom-control-input'
                                                            onChange={handleChange()}
                                                        />
                                                        <label className='custom-control-label' htmlFor='sell'>I want to sell</label>
                                                    </div>
                                                </div>

                                                <div className='form-group d-flex justify-content-center  py-3'>
                                                    <button
                                                        //onClick={clearForm}
                                                        className='btn btn-danger rounded mx-2'>
                                                        Clear
                                                    </button>
                                                    <button
                                                        type='submit'
                                                        className='btn btn-primary rounded mx-2'>
                                                        Search
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </LoginConsumer>
        );
    }
}

export default FilterClassifieds;