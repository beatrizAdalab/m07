import React from 'react';
import { LoginConsumer } from '../context/LoginContext';


const NewClassified = () => {
    return (
        <LoginConsumer>
            {(value) => {
                return (
                    <div>Nuevo</div>
                )
            }}
        </LoginConsumer>
    )
}

export default NewClassified;