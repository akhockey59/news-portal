import React, { Component } from 'react';

export class NewsUpdate extends Component {
  render() {
    let {title, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div>
        <div className="card" style={{width:'25rem',  marginTop:'30px', marginBottom:'30px'}}>
          <div className='card-header' style={{backgroundColor:'seagreen'}}>
          By: {!author?source:author}
          </div>
          <img src={imageUrl} class="card-img-top" alt="loading.." height="200px"/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <a href={newsUrl} className="btn btn-primary">View</a>
          </div>
          <div className='card-footer text-muted' style={{backgroundColor:'skyblue'}}>
          <cite className='source title'>
            {date}
          </cite>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsUpdate