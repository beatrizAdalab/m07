import React from 'react';
import { Link } from "react-router-dom";
import { LoginConsumer } from '../context/LoginContext';

// get our fontawesome imports
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const CardClassified = ({ classified }) => {
    return (
        <LoginConsumer>
            {(value) => {

                return (<div
                    className='col-6 col-md-4 col-lg-3 mb-5'>
                    <div className='card shadow-sm bg-white rounded'>
                        <Link
                            to={`/detailClassifieds/${classified._id}`}
                            key={classified.id}
                            className='text-decoration-none text-body'
                        >
                            <div className='card-container-img card-image'>
                                <img src={classified.photo ? classified.photo : 'sorry, photo not available'} className="card-img-top card-image" alt={classified.photo ? classified.name : 'sorry, photo not available'} />
                            </div>

                            <div className='card-body p-2'>
                                <p className='font-weight-bold'> {classified.price} €</p>
                                <p className='card-title'> {classified.name}</p>
                            </div>
                        </Link>
                        <Link
                            to={`/editClassifieds/${classified._id}`}
                            className='text-decoration-none text-body'
                        >
                            <FontAwesomeIcon className='mr-2' icon={faPencilAlt} />
                            Edit
                            </Link>

                    </div>
                </div>
                )
            }}
        </LoginConsumer>
    );
}

export default CardClassified;