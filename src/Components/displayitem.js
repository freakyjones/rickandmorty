import React from 'react';

const Displayitem=(props)=>{
    return(
      <div className="container">
       <div className="row">
         <div className="col-md-12">
              
         <div className="card">
  <div className="card-header ">
    <h2>{props.epname}</h2>
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.episode}</h5>
    <p className="card-text">{props.air_date}</p>
    <a href="#" className="btn btn-warning text-denger">charecters</a>
  </div>
   </div>
         </div>
       </div>
      </div>
    )
}

export default Displayitem;