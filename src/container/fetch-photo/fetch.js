import React, { Component } from 'react';
import axios from 'axios'
import withErrorHandler from '../../component/hoc/withErrorHandler/withErrorHandler'
import classes from './fetch.module.css'
import InputField from '../../component/InputField/InputField'
import ImgResult from '../../component/ImgResult/ImgResult'
import ErrorDiv from '../../component/ErrorDiv/ErrorDiv'
import Loader from '../../component/Loader/Loader'
import Pagination from '../../component/Pagination/Pagination'

class FetchData extends Component {
    state = { 
        photos: null,
        error: null,
        searchQuery: null,
        Loading: false,
        photoFound: true,
        loaded: false,
        page: 1
     }
    
    componentDidMount() {
        this.fetchData();
        
    }

    fetchData = () => {
        const input = 'random';
        
        this.setState({searchQuery: input});
        

        axios.get(`https://api.unsplash.com/search/photos/?client_id=029aec3dd7b110c2d22288546fa4d610a007e8ce054b7f1bafce1f66beda623e&query=${input}&per_page=12&page=${this.state.page}`)
        .then(response => this.setState({photos: response.data.results}))
        .catch(err => this.setState({error: err}))
    }

    searchImg = (e) => {
        e.preventDefault()
        
        this.setState({photos:null, page: 1})

        const input = this.state.searchQuery;
        
        axios.get(`https://api.unsplash.com/search/photos/?client_id=029aec3dd7b110c2d22288546fa4d610a007e8ce054b7f1bafce1f66beda623e&query=${input}&per_page=12`)
        .then(response => {this.setState({photos: response.data.results})})
        .catch(err => this.setState({error: err}))
    }
    
    getInputValue = (e) => {
        let InputValue = e.target.value;        
        this.setState({searchQuery: InputValue})
    }
    
    PaginationNextHandler = () => {
        this.setState({photos:null});

        const input = this.state.searchQuery;

        let counterIncrement = this.state.page + 1
        
        this.setState({page:counterIncrement})

        axios.get(`https://api.unsplash.com/search/photos/?client_id=029aec3dd7b110c2d22288546fa4d610a007e8ce054b7f1bafce1f66beda623e&query=${input}&per_page=12&page=${counterIncrement}`)
        .then(response => {this.setState({photos: response.data.results})})
        .catch(err => this.setState({error: err}))
    }

    PaginationPrevHandler = () => {
        this.setState({photos:null});

        const input = this.state.searchQuery;
        
        let counterIncrement = null;
        
        if(!this.state.page < 2) {
            counterIncrement = this.state.page - 1

            this.setState({page:counterIncrement})
    
            axios.get(`https://api.unsplash.com/search/photos/?client_id=029aec3dd7b110c2d22288546fa4d610a007e8ce054b7f1bafce1f66beda623e&query=${input}&per_page=12&page=${counterIncrement}`)
            .then(response => {this.setState({photos: response.data.results})})
            .catch(err => this.setState({error: err}))
        } else {
            return false;
        }

    }

    render() {     
            let errorDiv = null;

        if(this.state.photos) {
            if(this.state.photos.length <= 0) {
               errorDiv =  <ErrorDiv />
            }
        }

        let InputValue = this.state.searchQuery;
        let pageindex = this.state.page 

        return ( 
            <>
            <InputField disabled={InputValue <= 2} searchImg={this.searchImg} getInputValue={this.getInputValue} />
            <div className={classes.gallary}>
                {errorDiv}
                {this.state.photos ? this.state.photos.map((img, i) => 
                    <ImgResult 
                        key={i} 
                        link={img.links.html} 
                        title={img.tags[1].title} 
                        imgUrl={img.urls.regular} 
                        alt_description={img.alt_description}
                        userPhoto={img.user.profile_image.large}
                        userName={`${img.user.first_name} ${img.user.last_name}`}
                        Download={img.links.download}
                        userLink={img.user.links.html}
                        color={img.color} />)
                         :  <Loader />}
                         {this.state.photos ? 
                         <Pagination nextPage={this.PaginationNextHandler} 
                                     prevPage={this.PaginationPrevHandler}
                                     disabled={pageindex <= 1} />: null}
            </div>
            </>
         );
    }
}
 
export default withErrorHandler(FetchData, axios);