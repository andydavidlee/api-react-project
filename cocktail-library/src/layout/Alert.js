// Function based component to alert users to type in the search component

import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa'

const Alert = ({msg, type}) => {
    return (
        msg && type !== '' &&(
            <div className={`alert-${type}`}>
                <FaExclamationCircle /> {msg}
            </div>
        )
    )
}

export default Alert;