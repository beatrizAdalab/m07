import React from 'react';
import { Link } from 'react-router-dom';
import { LoginConsumer } from '../context/LoginContext';

// get our fontawesome imports
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    return (
        <LoginConsumer>
            {(value) => {
                return (<nav className='navbar navbar-light bg-white fixed-top'>
                    <div className='container'>
                        <Link to='/listClassifieds'>
                            <h1 className='navbar-brand m-0'>FlowMark</h1>
                        </Link>

                        <Link to='/login'>
                            <button
                                className='btn btn-link'
                            >
                                <FontAwesomeIcon icon={faPowerOff} />
                            </button>
                        </Link>
                    </div>
                </nav>)
            }}
        </LoginConsumer>
    )
}

export default Header;