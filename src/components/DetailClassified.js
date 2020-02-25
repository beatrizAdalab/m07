import React from 'react';
import { LoginConsumer } from '../context/LoginContext';


const DetailClassified = () => {
    return (
        <LoginConsumer>
            {(value) => {
                return (
                    <div>detalle</div>
                )
            }}
        </LoginConsumer>
    )
}

export default DetailClassified;