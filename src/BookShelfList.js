import React, { Component } from 'react'
import ShelfRecord from './ShelfRecord'
import * as BooksAPI from './BooksAPI'

class BookShelfList extends Component {
    state = {
        bookQ: []
     }
    
    ChangeSh=(book, shelfNm) => {
        const { bookQ } = this.state
        const uidx=bookQ.findIndex(b => b.id === book.id)
        const budt=bookQ[uidx]
        budt.shelf=shelfNm
        this.setState({
            bookQ: [...bookQ.slice(0, uidx), budt, ...bookQ.slice(uidx+1)] 
        })
        BooksAPI.update(book, shelfNm)
    }
    componentDidMount() {
        BooksAPI.getAll().then(b => {
            this.setState({ bookQ: b })
        })
        }
    render() {
        const { bookQ } = this.state
        let listc = [];
        let listw = [];
        let listr = [];
     //matching the required status of book
      bookQ.forEach(b => { 
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
          { bookQ.length > 0 ? (<div> {BookLst.map((sf, i) => ( <ShelfRecord key={i} title={sf.Bookname} books={sf.books} 
	    ChangeSh={this.ChangeSh }/>  
             ))} </div>)
                : (<div className="loading">Loading Books Please Wait .......</div>)
                }
         </div>
        ) // return close
    }// render function close
}//Bookshelf function close
export default BookShelfList
