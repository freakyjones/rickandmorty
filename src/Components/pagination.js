import React,{useState,useEffect} from 'react';
import Displayitem from './displayitem';
import Paginate from './paginate';


const Pagination=(props)=>{
    const [data,setdata]=useState([])
    const [loading,setloading]=useState(false)
    const [pages,setpages]=useState(0)
    const [currentpage,setcurrentpage]=useState(1)
    const [prev,setprev]=useState("")
    const [next,setnext]=useState("")
    const handleclick=(num)=>{
        setloading(true)
        setcurrentpage(num)
       fetch(`https://rickandmortyapi.com/api/episode/?page=${num}`)
       .then(res=>{
           return res.json()
       })
       .then(data=>{
            setdata(data.results)
            setpages(data.info.pages)
            setprev(data.info.prev)
            setnext(data.info.next)
       })
       setloading(false)
    }
    useEffect(()=>{
        setloading(true)
       fetch("https://rickandmortyapi.com/api/episode/?page=1")
       .then(res=>{
           return res.json()
       })
       .then(data=>{
            setdata(data.results)
            setpages(data.info.pages)
            setprev(data.info.prev)
            setnext(data.info.next)
       })
       setloading(false)
    },[])
    console.log(pages)
    console.log(prev)
    console.log(next)
    const paginates=[]
    for(let i=1;i<=pages;i++){
        paginates.push(<Paginate key={i} pagenum={i} currentpage={currentpage} handleclick={handleclick}/>)
    }
    const displayitems=data.map(ele=>{
        return <Displayitem
        key={ele.id}
        epname={ele.name}
        episode={ele.episode}
        air_date={ele.air_date}
        charecters={ele.characters}
    
        />
    })
return(
    <section id="pagination">
        <div className="container">
        <div className="row">
            <div className="col-md-12">
            
            {displayitems}
            </div>
           
        </div>
        <div className="row ">
        <div className="col-md-12 ">
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item" onClick={()=>{
         setloading(true)
         setcurrentpage(currentpage-1)
        fetch(prev)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
             setdata(data.results)
             setpages(data.info.pages)
             setprev(data.info.prev)
             setnext(data.info.next)
        })
        setloading(false)
    }}><a class="page-link" >Previous</a></li>
              {paginates}
   
    <li class="page-item" onClick={()=>{
         setloading(true)
         setcurrentpage(currentpage+1)
        fetch(next)
        .then(res=>{
            return res.json()
        })
        .then(data=>{
             setdata(data.results)
             setpages(data.info.pages)
             setprev(data.info.prev)
             setnext(data.info.next)
        })
        setloading(false)
    }}><a class="page-link" >Next</a></li>
  </ul>
</nav>
</div>
        </div>
        </div>
        
         
    </section>
  
)
}

export default Pagination;