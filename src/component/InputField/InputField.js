import React, {Component} from 'react';
import classes from './InputField.module.css'
import axios from 'axios';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler'

class InputField extends Component {
    render() {
        return (
                <div className={classes.Input_container}>
                    <form onSubmit={this.props.searchImg}>
                            <h1>Search from World's best Library</h1>
                        <div className={classes.Input}>
                            <input onChange={this.props.getInputValue} type='text' placeholder='search your favorate one' />
                            <button disabled={this.props.disabled} onClick={this.props.searchImg}>Search</button>
                        </div>
                    </form>
            </div>
     );
   
    }
}

export default withErrorHandler(InputField, axios);