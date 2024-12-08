import React from 'react';

const News = (props) => {
  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4 ">
      <div className="card bg-dark text-white" style={{maxWidth:"500px",height:"500px"}}>
        <img src={props.img} className="card-img-top" alt={props.title} style={{height:"250px"}} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc || 'No description available.'}</p>
          {props.author && <p className="card-text badge bg-secondary"><small>By {props.author}</small></p>}
        </div>
      </div>
    </div>
  );
};

export default News;
