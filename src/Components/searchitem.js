import React,{useState} from 'react';
import Item from './Items';


const Searchitem=(props)=>{
    const [display,setdisplay]=useState(false)
    const [name,setname]=useState("")
    const [loading,setloading]=useState(false)
    const [data,setdata]=useState([])
    const [error,seterror]=useState(false)
    const  handlechange=(e)=>{
      const {name,value}=e.target
      setname(value)
    }
  
    const handlesubmit=(event)=>{
        event.preventDefault()
        seterror(false)
        setdisplay(true)
        setdata([])
        const hero_name=name.split(" ")
        const hero=hero_name.map(ele=>{
            const capitalizeFirstLetter=(string)=> {
                return string.charAt(0).toUpperCase() + string.slice(1);
              }
             return capitalizeFirstLetter(ele); 
           })
           const super_hero=hero.join(" ")
           console.log(super_hero)
           setloading(true)
           fetch(`https://rickandmortyapi.com/api/episode/?name=${super_hero}`)
           .then(res=>{
               if(res.ok){
                return res.json()
               }else{
                throw new Error('Something went wrong');
               
               }
              
           })
           .then(data=>{
               setdata(data.results)
               console.log(data)
           })
           .catch(error=>{
               
               console.log(error)
               seterror(true)
              
           })
           setloading(false)
    }
    console.log(name)
    console.log(data)
    const handledisplay=()=>{
        setdisplay(false)
    }
    const item=data.map(ele=>{
        return <Item
        key={ele.id}
        epname={ele.name}
        episode={ele.episode}
        air_date={ele.air_date}
        charecters={ele.characters}
        handledisplay={handledisplay}
        />
    })
  
    return(
        <section id="search_item">
          <div className="container">
              <div className="row search_bar">
              <div className="col-md-12 ">
                  <h1 className="searchbar_heading">search for episode</h1>
                  <form onSubmit={handlesubmit}>
                  <div classname="form-group search">
                      <input type="text" classname="form-control" id="inputitem" name="name" aria-describedby="emailHelp" placeholder="write epidsode name" onChange={handlechange} required/>
                      <button type="submit" className="btn btn-primary mb-2 search_btn" >search</button>
                  </div>
                  </form> 
              </div>
                </div>
                {display?
                 <div className="row">
                 
                 {error?<div className="col-md-12 erroritem">
                     <h1>something went wrong</h1>
                 </div>
                  :<div className="col-md-12">  {item}   </div>}  
                
              
                 </div>:null}    
          </div>
        </section>
    )

}

export default Searchitem;