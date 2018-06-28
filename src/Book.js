import React, { Component } from 'react';

class Book extends Component {
    render() {
        const { book, ChangeSh  } = this.props
	const tnail = book.imageLinks ? book.imageLinks.thumbnail : '';
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 130, height: 190, backgroundImage: 'url(' + tnail + ')'}}></div>
                      <div className="book-shelf-changer">
                        <select 
                            onChange={e => ChangeSh (book, e.target.value)}
                            value={book.shelf ? book.shelf : ''}>
                            <option value="none" disabled>Move To</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                     </div>
                </div>
                <div className="book-title">{book.title ? book.title : null}</div>
                <div className="book-authors">{book.authors ? book.authors.join(',') : null}</div>
            </div>
        )
    }
}
export default Book
