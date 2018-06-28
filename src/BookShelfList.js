import React, { Component } from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class BookShelfList extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        BooksAPI.getAll().then(b => {
            this.setState({ books: b })
        })
    }

    ChangeSh=(book, shelf) => {
        let id = book.id
        let cbook = [...this.state.books]
        let iup = cbook.findIndex(book => book.id === id)
        let updatedi = Object.assign({}, cbook[iup], {
            shelf: shelf
        });
        this.setState({
            books: [...cbook.slice(0, iup), updatedi, 
            ...cbook.slice(iup + 1)]
        })
        BooksAPI.update(book, shelf)
    }
    render() {
        const { books } = this.state
        let listc = [];
        let listw = [];
        let listr = [];
     //matching the required status of book
      books.forEach(b => { 
        if(b.shelf==='currentlyReading')
           listc.push(b)
         
        else if(b.shelf==='wantToRead')
           listw.push(b)
          
        else if(b.shelf=== 'read')
           listr.push(b)
            })
        
        const BookLst = [
       {
         'Bookname': 'Currently Reading',
         'books' : listc
       },
       {
         'Bookname': 'Want To Read',
         'books' : listw
       },
       {
         'Bookname': 'Read',
         'books' : listr
        }
        ]
      return(
        <div className="list-books-content">
          { books.length > 0 ? (<div> {BookLst.map((shelf, index) => ( <Shelf key={index} title={shelf.Bookname} books={shelf.books} 
	    ChangeSh={this.ChangeSh }/>  
             ))} </div>)
                : (<div className="loading">Please Wait...</div>)
                }
         </div>
        ) // return close
    }// render function close
}//Bookshelf function close
export default BookShelfList
