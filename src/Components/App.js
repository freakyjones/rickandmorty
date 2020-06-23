import React from 'react';
import Header from './header';
import css from '../style/App.css'
import Searchitem from './searchitem';
import Pagination from './pagination';
import Footer from './footer';

const App=()=>{
    return(
        <div className="app">
            
            <Header/>
            <Searchitem/>
            <Pagination/>
            <Footer/>   
        </div>
    )
}

export default App;