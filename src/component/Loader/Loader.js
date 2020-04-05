import React from 'react';
import classes from './Loader.module.css'

const Loader = () => {
    return ( 
    <div className={classes.content}>
        <div className={classes.loading}>
            <p>loading</p>
            <span></span>
        </div>
    </div>
     );
}
 
export default Loader;