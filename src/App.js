import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import BookSearch from './Search'
import './App.css'
import BookList from './BookList'

class BooksApp extends Component {
    render() {
        return(
            <div className="app">
                <Route exact path="/" component={BookList} />
                <Route path="/search" component={BookSearch} />
            </div>
        );
    }
}
export default BooksApp
