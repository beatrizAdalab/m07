import React from 'react';
import { LoginConsumer } from '../context/LoginContext';
import FormClassified from './FormClassifieds'


const NewClassified = () => {
    //newClassified:
    return (
        <LoginConsumer>
            {(value) => {
                return (
                    <div>New Classifieds
                    <FormClassified />
                    </div>
                )
            }}
        </LoginConsumer>
    )
}

export default NewClassified;