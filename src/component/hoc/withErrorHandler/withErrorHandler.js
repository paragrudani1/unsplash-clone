import React, {Component} from 'react';
import Aux from '../Auxliary'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }

        componentWillMount() {
           this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({error: null})
                return req;
            })

            this.resInterceptors = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})
                
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptors)
            axios.interceptors.response.eject(this.resInterceptors)
        }
        
        errorConfirmedHandler = () => {
            this.setState({error: null})
        }


        render() {

            return(
                <Aux>
                    <WrappedComponent {...this.props} />
                </Aux>
            )
        }
    }
}

export default withErrorHandler;