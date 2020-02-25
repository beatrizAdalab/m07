import React from 'react';
import { Link } from 'react-router-dom';
import { LoginConsumer } from '../context/LoginContext';

// get our fontawesome imports
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardClassifieds() {
    return (
        <LoginConsumer>
            {(value) => {
                return (
                    <div>Card</div>
                )
            }}
        </LoginConsumer>
    )
}

export default CardClassifieds;