import React from 'react';
import classes from './ErrorDiv.module.css'
import warningImg from '../../assets/warning.svg'

const ErrorDiv = () => {
    return ( 
        <div className={classes.ErrorDiv}>
            <img src={warningImg} alt='result not found' />
            <code>Result Not found</code>
        </div>
     );
}
 
export default ErrorDiv;