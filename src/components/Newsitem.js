import React from 'react'

const Newsitem=(props)=> {
  
    let { author, title, description, imageUrl, url, date,source } = props;
    return (
      <div className='my-3'> 
        <div className="card" style={{ width: '18rem' }}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {source.name}</span>
          <img src={imageUrl ?  imageUrl : 'https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/cutchall-0124-1652736307.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*'} style={{ height: '260px' }} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title + "..."} </h5>
            <p className="card-text">{description + "..."}</p>
            <p className="card-text"><small className="text-muted">Author: {author ? author : 'unknown'}</small></p>
            <p className="card-text"><small className="text-muted">Last updated on {new Date(date).toGMTString()}</small></p>
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  
}
export default Newsitem;