import React from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
    return ( 
        <div className={classes.Pagination}>
            <button disabled={props.disabled} className={classes.back_btn} onClick={props.prevPage}>
                Prev
            </button>
            <button className={classes.next_btn} onClick={props.nextPage}>
                Next
            </button>
        </div>
     );
}
 
export default Pagination;