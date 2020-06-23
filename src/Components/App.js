import React from 'react';
import Header from './header';
import css from '../style/App.css'
import Searchitem from './searchitem';
import Pagination from './pagination';

const App=()=>{
    return(
        <div className="app">
            <Header/>
            <Searchitem/>
            <Pagination/>
        </div>
    )
}

export default App;