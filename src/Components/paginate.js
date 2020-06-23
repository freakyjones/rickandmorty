import React from 'react';


const Paginate=(props)=>{
 
    return(
        
    <li class="page-item" onClick={()=>props.handleclick(props.pagenum)}><a class="page-link" >{props.pagenum}</a></li>

    )
}

export default Paginate;