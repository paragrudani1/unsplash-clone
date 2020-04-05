import React, { Component } from 'react';
import classes from './ImgResult.module.css'
import downloadBtn from '../../assets/download.svg'


class ImgResult extends Component  {

      render() {
        return (
            <>
            <div className={classes.img_container} style={{backgroundColor: this.props.color, borderRadius: '3%'}} >
            <a href={this.props.link}>
             <div className={classes.user}>
                 <img src={this.props.userPhoto} alt={this.props.userName} />
                     <h1 className={classes.userName}>
                         <a href={this.props.userLink}>
                             {this.props.userName}
                         </a>
                     </h1>
             </div>
             <img className={classes.photo} src={this.props.imgUrl} alt={this.props.alt_description} />
         </a>


         {/* <span className={classes.img_content_hover} ref={this.myRef} >
             <h2 className={classes.title}>{this.props.title}</h2>
         </span> */}
         
         <div ref={this.myRef} className={classes.downloadBtn}>
             <a href={this.props.link+'/download?force=true'} download>
             <img className={classes.downloadImg} src={downloadBtn}  alt={'Download'}/>
             </a>
         </div>
            </div>
            </>
     );
    }
}
 
export default ImgResult;