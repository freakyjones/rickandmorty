import React,{usestate} from 'react';

const Item=(props)=>{
    
    return(
      <div className="container">
       <div className="row">
         <div className="col-md-12">
              
         <div className="card">
  <div className="card-header d-flex justify-content-between">
    <h2>{props.epname}</h2>
    <svg class="bi bi-x-circle-fill" onClick={props.handledisplay} width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.146-3.146a.5.5 0 0 0-.708-.708L8 7.293 4.854 4.146a.5.5 0 1 0-.708.708L7.293 8l-3.147 3.146a.5.5 0 0 0 .708.708L8 8.707l3.146 3.147a.5.5 0 0 0 .708-.708L8.707 8l3.147-3.146z"/>
</svg>
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

export default Item;