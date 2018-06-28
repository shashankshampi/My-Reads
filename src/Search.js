import React, { Component } from 'react'
import Book from './Book'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class Search extends Component {
    state = {
      QList: '',
      BookList: ''
    }
    componentDidMount() {
     //Getting the book id from all other parameters
      BooksAPI.getAll().then(QList => {
          const bids = QList.map(book => ({ id: book.id,shelf: book.shelf }))
          this.setState({ BookList: bids })
        })
    }
    Vlist = (e) => {
      const value = e.target.value
      if(value) {
        BooksAPI.search(value).then(QList => {
          if( QList.hasOwnProperty('error') || !QList ) {
            this.setState({ QList: [] })
          } else this.setState({ QList: QList })  
        })
      } else this.setState( { QList: [] })
    }// Vlist close
    
    ChangeSh  = (book, shelf) => {
      const addedBook = []
      BooksAPI.update(book, shelf)
        .then(QList => {
          Object.keys(QList).forEach(shelf => { return QList[shelf].map(id => ({ id: id, shelf: shelf}))
              .forEach(book => {
                addedBook.push(book)
              })
            })
            return addedBook
        }).then(addedBook => {
          this.setState({ BookList: addedBook })
        })
    }

  render() {
        const { QList, BookList } = this.state
        let bList
        if (QList.length > 0) {
          bList = QList.map((book, i) => { BookList.forEach(cbook => {
              if(cbook.id === book.id) {
                book.shelf = cbook.shelf
         }})
         return (
            <li key={i}>
              <Book ChangeSh={this.ChangeSh } book={book} />
            </li>
            ) })
        } else bList = null
      return(
    	// performing the search operation and rendering the result onto the screen
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" onChange={this.Vlist} placeholder="Book search"/>
              </div>
           </div>
            <div className="search-books-results"> <ol className="books-grid"> {bList} </ol> </div>
          </div>
        )
    }
}
export default Search
